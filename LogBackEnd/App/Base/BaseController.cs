using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace LogBackEnd.App.Base
{

    public abstract class BaseController : ApiController
    {

        // Default JSON settings
        public JsonSerializerSettings JsonSettings = new JsonSerializerSettings
        {
            // Convert property keys to camelCase
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };

        /// <summary>
        /// Return response Json
        /// Keys are converted to Javascript standard camelCase
        /// </summary>
        /// <param name="model">Object to serialize</param>
        /// <returns>HttpResponseMessage</returns>
        public HttpResponseMessage Json(Object model)
        {
            try
            {
                string result = JsonConvert.SerializeObject(model, JsonSettings);
                var response = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(result, Encoding.UTF8, "application/json")
                };
                return response;
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }

    }
}