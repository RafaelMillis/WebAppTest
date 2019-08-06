using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebAppTest.DAL;
using WebAppTest.Models;
using WebAppTest.Models.Interfaces;

namespace WebAppTest.BLL
{
    public class Bll : IBll
    {
        public IEnumerable<Student> GetStudents(string name)
        {
            name =  string.IsNullOrEmpty(name)? "" : name;
            return dal.GetStudents().Where(x => x.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
        }

        Dal dal = new Dal();
    }
}
