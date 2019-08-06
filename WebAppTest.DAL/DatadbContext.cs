using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using WebAppTest.Models;

namespace WebAppTest.DAL
{
    public class DatadbContext : DbContext 
    {
        public  DbSet<Student> Students { get; set; }
        private string StrConDB = "Data Source=.;Initial Catalog=TestDB;Integrated Security=True";
        //private string StrConDB = Environment.GetEnvironmentVariable("StrConDB"); 

        public DatadbContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            try
            {
                optionsBuilder.UseSqlServer(StrConDB);
            }
            catch (Exception ex)
            {

            }
        }


    }
}
