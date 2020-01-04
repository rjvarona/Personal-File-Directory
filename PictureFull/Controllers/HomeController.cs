using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Data2;
using PictureFull.Models;
using Data2.Class;
using Data2.Services;

namespace PictureFull.Controllers
{
    public class HomeController : Controller
    {
        //public List<Entertainment> Entertainments { get; private set; }

        private Services _service = new Services();
        private List<Entertainment> Entertainments;

        public ActionResult Index()
        {

            Entertainments = _service.allEntertainment();


            return View();
        }


        public ActionResult rjentertainment(string type, string searchValue)

        {



            var model = new EntertainmentViewModel()
            {
                Entertainments = _service.allEntertainment(),
                categories = _service.selectCategory(),
                Locations = _service.selectLocation(),
                Publishers = _service.selectPublisher()
            };



            if (searchValue != null)
            {
                model.Entertainments = _service.searchElement(searchValue);
              
            }


            //getting all entertainment showing it on one page *use case statement*
            if (type == "Music")
            {
                model.Entertainments = _service.selectMusic();
            }
            else if(type == "Video")
            {
                model.Entertainments = _service.selectVideo();  
            }
            else if (type == "Picture")
            {

                model.Entertainments = _service.selectImages();
            }
            else if (type == "Karaoke"){
                model.Entertainments = _service.allKaraoke();
                

            }

            foreach (var item in model.Entertainments)
            {
                item.allCategories = _service.customCategories(item.ent_id);
            }

            //???? category_name is not getting the name
            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}