using System;
using System.Collections.Generic;
using System.Text;

namespace WebAppTest.Models.Interfaces
{
    public interface IBll
    {
        IEnumerable<Student> GetStudents(string txt);
    }
}
