using LogBackEnd.App.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace LogBackEnd.App.Log
{
    public class LogController : BaseController
    {

        const string DATA_SOURCE = "~/DataSource/varnish.log";

        [HttpGet]
        [Route("log")]
        public HttpResponseMessage GetAll([FromUri] string sorting)
        {
            LogReader reader = new LogReader(DATA_SOURCE);
            List<LogEntryModel> items = reader.GetEntries().GetRange(0,200);
            return Json(SortItems(items, sorting));
        }

        private List<LogEntryModel> SortItems(List<LogEntryModel> list, string sorting)
        {
            switch (sorting) {
                case LogSortingTypes.SORTING_IP:
                    return list.OrderBy(x => x.IP).ToList<LogEntryModel>();
                case LogSortingTypes.SORTING_REQUEST:
                    return list.OrderBy(x => x.Request).ToList<LogEntryModel>();
                case LogSortingTypes.SORTING_RESPONSE:
                    return list.OrderBy(x => x.Response).ToList<LogEntryModel>();
                default:
                    return list;
            }
        }


    }
}