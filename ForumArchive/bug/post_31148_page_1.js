[{"Owner":"royibernthal","Date":"2017-06-18T17:58:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\tSmall parts of controls are not being rendered when I_t_m resizing things that depend on idealWidth.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\tThe calculated width and height apparently are smaller than what they should be in order to render everything_co_ or alternatively they are calculated well and the problem is with the actual rendering_co_ or I_t_m missing something again_lt_span_gt_ _lt_/span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\tWhen you resize the window to be small enough the yellow line at the top disappears. If you resize the window slowly you_t_ll notice the top part of the texture is gradually cropped more and more.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KU0JCD%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KU0JCD#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-19T16:22:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI do not think it is cropping here. It seems to me that the scale of the image will not capture the first pixel because the size is too small and the zoom of the image will ignore the first line.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-06-20T00:46:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMakes sense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you think about this? Same issue?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XCPP9Y%23114_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XCPP9Y#114_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s one behavior that so far I was only able to reproduce locally within my project - embedded fonts always look good at the size they appeared at on page load_co_ but when I resize them they start to appear cropped_co_ even when I resize them to be bigger_co_ which doesn_t_t make sense.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-20T15:21:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot sure to see the issue here _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-06-20T22:43:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNotice the differences in letter proportions? I think that your previous explanation might apply here as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill trying to reproduce what I_t_m experiencing locally_co_ which is definitely cropped and not because of small zoom level.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/ss.png.318570bbeaa4b2176d357a2499d0f37a.png_qt_ data-fileid_eq__qt_13487_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_ss.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13487_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/ss.png.318570bbeaa4b2176d357a2499d0f37a.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-20T23:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep I think so\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]