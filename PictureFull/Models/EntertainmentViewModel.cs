using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Data2.Class;
namespace PictureFull.Models
{
    public class EntertainmentViewModel
    {

        public List<Entertainment> Entertainments { get; set; }
        public List<category> categories { get; set; }
       
        public List<Publisher> Publishers { get; set; }
        public List<Location> Locations { get; set; }
    }
}