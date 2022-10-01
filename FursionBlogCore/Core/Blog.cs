using Fursion;
namespace Fursion.FursionBlogCore
{
    public class Blog
    {
        public string? BlogID { get; set; }
        public string? Creationtime { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public Blog(string User)
        {
            //获取时间戳，生成博客ID
            Creationtime = Tools.GetTimeStamp();
        }
    }
}