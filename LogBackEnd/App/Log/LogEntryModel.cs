using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LogBackEnd.App.Log
{
    public class LogEntryModel
    {
        public string IP { get; set; }
        public string Date { get; set; }
        public string Request { get; set; }
        public string Response { get; set; }
        public string Size { get; set; }
        public string Referer { get; set; }
        public string UserAgent { get; set; }

    }
}