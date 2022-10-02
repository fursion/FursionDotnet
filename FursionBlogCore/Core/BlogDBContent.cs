using System;
using Fursion.FursionBlogCore;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore;
namespace Fursion.FursionBlogCore
{
    public class BlogContext:DbContext
    {
        public DbSet<Blog> Blogs{get;set;}
        public static string ConnectStr {get;set;} 
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseMySQL(ConnectStr);
        }
      
    }
}

