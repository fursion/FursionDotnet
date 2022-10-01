using System;
namespace Fursion.FursionBlogCore
{
    public class FursionBlogCore
    {
        public string API_Version { get; set; }
        public FursionBlogCore(string LocalVsersion)
        {
            API_Version = LocalVsersion;
        }
        private string CheckVersion()
        {
           return "";
        }
    }
}

