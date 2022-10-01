using System;
using Fursion.FursionBlogCore;
using Microsoft.EntityFrameworkCore;
namespace FursionBlogCore.Core
{
    public class BlogContext:DbContext
    {
        public DbSet<Blog> Blogs{get;set;}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseMySQL("");
        }
      
    }
}

