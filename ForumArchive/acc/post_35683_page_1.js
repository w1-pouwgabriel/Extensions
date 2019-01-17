[{"Owner":"Andrey Zimin","Date":"2018-02-13T17:07:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi friends! Is the object A is object B. Is there a way to give new coordinates to the object B_co_ but so that the center coordinates was the object A? But object a does not become the parent of object B!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-02-13T18:31:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf I understand your question_co_ but otherwise maybe a PG to explain?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_objectB.position _eq_ objectA.getAbsolutePosition() // may need to .clone() that position_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Andrey Zimin","Date":"2018-02-13T19:55:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_204684_qt_ data-ipsquote-contentid_eq__qt_35683_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1518546700_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf I understand your question_co_ but otherwise maybe a PG to explain?\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_objectB.position _eq_ objectA.getAbsolutePosition() _lt_span_gt_// may need to .clone() that position_lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is an object Obj it and want to move to the point A. The known coordinates of point A with respect to the global center M. How can I do it using method setLinearVelocity(target)? If I is target put the coordinates of the point M_co_ the Obj moves in the direction of the line L. But if it were possible to specify the target relative to the Obj. How can I do that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObj.physicsImpostor.setLinearVelocity(target)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMore simply. When you click the mouse_co_ send Obj to where I clicked with setLinearVelocity()\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/DeepinScreenshot_select-area_20180213225012.png.580d933172fcefcc656ee45152059189.png_qt_ data-fileid_eq__qt_16996_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_DeepinScreenshot_select-area_20180213225012.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16996_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/DeepinScreenshot_select-area_20180213225012.thumb.png.21d02e4c2019423af95fe5a5bb97e078.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-02-13T21:24:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is a PG that calculates direction from random points (ie_dd_ OBJ) to a _qt_target_qt_ (ie_dd_ A) and draws a cylinder on that direction.  I copied part of another PG_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#2A0HNY_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#2A0HNY_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tWith 2 points in 3d space when you take the cross product of them you get a vector that is orthogonal/perpendicular to both (the order of arguments will change answer).  If you consider in general that is not straight up you want to go then you can cross product (line 24) with Vector3.Up to get an axis (ie_dd_ x or z axis).  The Dot product (line 28) is the cosine of the angle between them.  Anyway_co_ try some of that code as it should point you in the right direction. Otherwise make a PG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ you may just want to apply impulses in that direction instead of setLinearVelocity - depending on what you_t_re doing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ you might have some luck with lookAt function.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-02-13T21_dd_33_dd_27Z_t_ title_eq__t_02/13/2018 09_dd_33  PM_t_ data-short_eq__t_Feb 13_t__gt_February 13_lt_/time_gt_ by brianzinn_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Andrey Zimin","Date":"2018-02-14T07:08:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_204697_qt_ data-ipsquote-contentid_eq__qt_35683_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1518557069_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHere is a PG that calculates direction from random points (ie_dd_ OBJ) to a _qt_target_qt_ (ie_dd_ A) and draws a cylinder on that direction.  I copied part of another PG_dd__lt_br /_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#2A0HNY_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#2A0HNY_lt_/a_gt__lt_br /_gt_\n\t\t\t_lt_br /_gt_\n\t\t\tWith 2 points in 3d space when you take the cross product of them you get a vector that is orthogonal/perpendicular to both (the order of arguments will change answer).  If you consider in general that is not straight up you want to go then you can cross product (line 24) with Vector3.Up to get an axis (ie_dd_ x or z axis).  The Dot product (line 28) is the cosine of the angle between them.  Anyway_co_ try some of that code as it should point you in the right direction. Otherwise make a PG.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAlso_co_ you may just want to apply impulses in that direction instead of setLinearVelocity - depending on what you_t_re doing.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tedit_dd_ you might have some luck with lookAt function.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you! I am created PG. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IFFDYH%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IFFDYH#1_lt_/a_gt_ (click on the ground)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do I get a value target (line 39) such_co_ that the ball moves in the direction of the mouse click?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-02-14T09:04:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExamining _t_pick_t_ in the console shows that _t_pickedPoint_t_ is what you need. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IFFDYH%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IFFDYH#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Andrey Zimin","Date":"2018-02-14T09:28:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_204745_qt_ data-ipsquote-contentid_eq__qt_35683_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1518599083_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t26 minutes ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tExamining _t_pick_t_ in the console shows that _t_pickedPoint_t_ is what you need. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IFFDYH%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IFFDYH#2_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo friend! All not just simple! )) The count comes from the global coordinate axes. If I click near the ball at the top left_co_ it will roll in the opposite direction. And all this because of the global reference and direction of the vector. How to fix it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IFFDYH%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IFFDYH#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-02-14T10:53:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBetter? _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IFFDYH%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IFFDYH#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Andrey Zimin","Date":"2018-02-14T11:05:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_204758_qt_ data-ipsquote-contentid_eq__qt_35683_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1518605604_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 minutes ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBetter? _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IFFDYH%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IFFDYH#4_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI knew that there must be a very simple solution) Thanks a lot!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-02-14T14:42:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGlad you got it - a PG always helps!  Right now the ball velocity is a factor of how far the mouse click is from the ball.  If that is not how you wanted it_co_ you can normalize and/or scale that vector to control the speed_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IFFDYH%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IFFDYH#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]