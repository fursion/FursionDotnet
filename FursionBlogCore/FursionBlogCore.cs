using System;
using Microsoft.Extensions.DependencyInjection;

namespace Fursion.FursionBlogCore
{
    public class FursionBlogCore
    {
        public string API_Version { get; set; }
        public BlogContext BlogContext { get; set; }
        public FursionBlogCore(string LocalVsersion, BlogContext blogContext)
        {
            API_Version = LocalVsersion;
            BlogContext = blogContext;
        }
        public void StartBlogService()
        {

        }
        private string CheckVersion()
        {
            return "";
        }
    }
    public class FursionBlogServiceBuilder
    {
        private IServiceCollection serviceDescriptors;
        public FursionBlogServiceBuilder(IServiceCollection services)
        {
            serviceDescriptors = services;
        }
        public void FursionBlogService()
        {
            serviceDescriptors.AddTransient<FursionBlogCore>();
        }
        public void SetBolgMySQL(string connect)
        {
            BlogContext.ConnectStr=connect;
            serviceDescriptors.AddDbContext<BlogContext>();
        }
    }
    public static class FursionBlogServiceExtension
    {
        /// <summary>
        /// 启用fursion提供的博客服务
        /// </summary>
        /// <param name="servicecollection"></param>
        /// <param name="configure"></param>
        public static void UseFursionBlogService(this IServiceCollection servicecollection, Action<FursionBlogServiceBuilder> configure)
        {
            var builder = new FursionBlogServiceBuilder(servicecollection);
            configure(builder);
        }
    }
}

