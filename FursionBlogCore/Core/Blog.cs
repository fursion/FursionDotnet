namespace Fursion.FursionBlogCore
{
    public class BlogBase
    {
        public string? BlogID { get; set; }
        public string? Creationtime { get; set; }
    }
    public class Blog : BlogBase
    {
        public string Title{get;set;}
        public string Content{get;set;}
        public Blog(){
            //获取时间戳，生成博客ID
        }
    }
}