using System;
using System.Collections.Generic;
using System.Text;
using System.Web;

namespace LogBackEnd.App.Log
{
    public class LogReader
    {

        protected string LogFilePath;

        public LogReader(string path)
        {
            LogFilePath = HttpContext.Current.Server.MapPath(path);
        }

        /// <summary>
        /// Read all the lines in the file 
        /// </summary>
        /// <returns></returns>
        public List<LogEntryModel> GetEntries()
        {
            string line;
            int counter = 0;
            List<LogEntryModel> list = new List<LogEntryModel>();

            System.IO.StreamReader file = new System.IO.StreamReader(LogFilePath);
            while ((line = file.ReadLine()) != null)
            {
                list.Add(GetLogEntry(line));
                counter++;
            }

            file.Close();
            return list;
        }


        /// <summary>
        /// Assign the parsing results to the model instance
        /// </summary>
        /// <param name="line"></param>
        /// <returns></returns>
        protected LogEntryModel GetLogEntry(string line)
        {
       
            var parts = ParseLine(line);

            LogEntryModel entry = new LogEntryModel()
            {
                IP = parts[0],
                Date = Trim(parts[3]),
                Request = Trim(parts[4]),
                Response = parts[5],
                Size = parts[6],
                Referer = Trim(parts[7]),
                UserAgent = Trim(parts[8]),
                
            };
            return entry;
        }

        protected string Trim(string text)
        {
            char[] chars = { '"', '[', ']' };
            return text.Trim(chars);
        }

        /// <summary>
        /// Parse the line to extract the tokens
        /// Tokens can be separated by space, but can be also enclosed in either "" or []
        /// If the token is enclosed, every space inside need to be preserved
        /// </summary>
        /// <param name="line"></param>
        /// <returns>List of string tokens</returns>
        protected List<string> ParseLine(string line)
        {
            StringBuilder currentToken = new StringBuilder();
            bool inQuoteDelimitedString = false;
            bool inParenDelimitedString = false;
            List<string> scannedTokens = new List<string>();


            // Iterate over every character to find special ones
            foreach (char c in line)
            {
                switch (c)
                {

                    // CASE: Quote delimiter
                    case '"':
                        if (inQuoteDelimitedString)
                        {
                            if (currentToken.Length > 0)
                            {
                                scannedTokens.Add(currentToken.ToString());
                                currentToken.Clear();
                            }
                        }

                        if (!inParenDelimitedString)
                        {
                            inQuoteDelimitedString = !inQuoteDelimitedString;
                        }
                        break;
                    
                    // CASE: [] delimiter
                    case '[':

                        if (!inQuoteDelimitedString)
                        {
                            inParenDelimitedString = true;
                        } else
                        {
                            currentToken.Append(c);
                        }
                        break;

                    case ']':
                        // If not in quotes but after starting '[' close the token
                        if (!inQuoteDelimitedString && inParenDelimitedString)
                        {
                            if (currentToken.Length > 0)
                            {
                                scannedTokens.Add(currentToken.ToString());
                                currentToken.Clear();
                            }
                            inParenDelimitedString = false;
                        } else
                        {
                            currentToken.Append(c);
                        }
                        break;
                
                    // CASE: Space delimiter
                    case ' ':
                        // If not within other delimiters, use as a delimiter
                        if (!inQuoteDelimitedString && !inParenDelimitedString) 
                        {
                            if (currentToken.Length > 0)
                            {
                                scannedTokens.Add(currentToken.ToString());
                                currentToken.Clear();
                            }
                        }
                        // Within other delimiters - append to current token
                        else
                        {
                            currentToken.Append(c);
                        }
                        break;

                    // CASE: Not a special char - just append to the current token
                    default:
                        currentToken.Append(c);
                        break;
                }
            }
            if (currentToken.Length > 0)
            {
                scannedTokens.Add(currentToken.ToString());
                currentToken.Clear();
            }

            return scannedTokens;
        }


    }
}