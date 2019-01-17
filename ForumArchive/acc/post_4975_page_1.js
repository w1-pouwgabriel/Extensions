[{"Owner":"Nico","Date":"2014-03-20T14:12:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once again I need some help_co_ I would like to know if there is a way to pick multiple meshes ?_lt_/p_gt__lt_p_gt_I would like to draw a rectangle select zone with a 2D canvas_co_ so I can have 4 positions (2D screen positions)_co_ but is it possible to pick every meshes inside this zone ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for reading !  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Nico._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-21T10:09:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_With opengl_co_ you could ask for a offline rendering of a new viewport corresponding of your select zone and if I remember well you could get the list of rendered meshes. That would be the ones inside of your select area (at least partially)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-21T10:12:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The key is glLoadName. I don_t_t know if WebGL has such a thing._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-21T10:14:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve just found this_co_ that could be useful_dd_ _lt_a href_eq__qt_http_dd_//web.eecs.umich.edu/~sugih/courses/eecs487/common/notes/APITables.xml_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//web.eecs.umich.edu/~sugih/courses/eecs487/common/notes/APITables.xml_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nico","Date":"2014-03-22T23:17:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for help but it appears to not be possible to do an offline rendering of a new viewport to get back selected meshes inside a zone. I could make a mistake_co_ since I don_t_t have a lot of knowledge on WebGL/OpenGL_co_ and I don_t_t fully understand technicals articles about WebGL/OpenGL I have found_co_ I_t_ve started using 3D engine with BabylonJS  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ alt_eq__qt__dd_rolleyes_dd__qt__gt__lt_/p_gt__lt_p_gt_Do you (or somebody else who can help) have another idea ?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-24T04:19:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perhaps creating a box projected from your 2d rect and see if meshes intersects with the box?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-27T10:38:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Too bad that it must be done on CPU._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-27T22:03:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_We should add this to our good things to develop _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]