[{"Owner":"amo yeh","Date":"2017-08-24T04:54:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there a way to smooth dynamic created mesh? searched the forum and found something related to VertexData.ComputeNormals_co_ I tried it and not working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\there is a demo _lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#0GUH53_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#0GUH53_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe attached picture shows the problem_co_ the outer head is a babylon file (smoothed )_co_ the inner face is dynamically generated. clearly the lighting on the inner face looks flat.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess it is something like this in unity forum ? _lt_a href_eq__qt_http_dd_//answers.unity3d.com/questions/630505/how-to-procedurally-generate-smooth-meshes.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//answers.unity3d.com/questions/630505/how-to-procedurally-generate-smooth-meshes.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks for the help  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/face.jpg.52afc4c0985355dfaffe49112c310281.jpg_qt_ data-fileid_eq__qt_14574_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_face.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14574_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/face.jpg.52afc4c0985355dfaffe49112c310281.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amo yeh","Date":"2017-08-24T07:26:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twell ~ I got it working_co_ what I did was I copied the normal values from exported .babylon item and apply it directly to the generated mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#0GUH53%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#0GUH53#1_lt_/a_gt_  ( values in new normal array is copied from .babylon exported item)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-08-24T13:55:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlternative is to use the minimizeVertices snippet from _lt_a href_eq__qt_http_dd_//babylonjsguide.github.io/snippets/Minimise_Vertices_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjsguide.github.io/snippets/Minimise_Vertices_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0GUH53%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0GUH53#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]