[{"Owner":"chg","Date":"2016-01-08T09:19:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not sure if I might check out Babylon.js more in the future or not_co_ but I_t_m kind of curious I guess_co_ does Babylon.js interleave vertex attributes on meshes automatically?_lt_/p_gt__lt_p_gt_\nI_t_ll admit I don_t_t know the cost of not interleaving attributes on modern hardware_co_ and imagine it_t_s not that bad even on mobile_sm_ but it just seems shocking and lazy to me for JS engines not to do things _lt_em_gt_the right way_lt_/em_gt_™ for reasons I don_t_t understand (Javascript elegance?)_lt_/p_gt__lt_p_gt_\nNote_dd_ italics and TM symbol are my way of trying to acknowledge that I_t_m probably being stupid with this_co_ ie. plz don_t_t take this too seriously_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-08T09:59:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I guess you are talking about the (VNCVNC...) approach here _dd_ _lt_a href_eq__qt_https_dd_//www.opengl.org/wiki/Vertex_Specification_Best_Practices_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.opengl.org/wiki/Vertex_Specification_Best_Practices_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unless it_t_s done at some higher level in the code_co_ I_t_m not sure it is the way BJS uses _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.engine.ts#L1027_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.engine.ts#L1027_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DK would probably answer better than me to this question._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chg","Date":"2016-01-08T10:05:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks Jerome! Looking at that code it looks like it might be supported_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_                var offset _eq_ 0_sm_                for (var index _eq_ 0_sm_ index &lt_sm_ vertexDeclaration.length_sm_ index++) {                    var order _eq_ effect.getAttributeLocation(index)_sm_                    if (order &gt_sm__eq_ 0) {                        this._gl.vertexAttribPointer(order_co_ vertexDeclaration[index]_co_ this._gl.FLOAT_co_ false_co_ vertexStrideSize_co_ offset)_sm_                    }                    offset +_eq_ vertexDeclaration[index] * 4_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-01-09T00:17:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@chg - you_t_re bored_co_ aren_t_t you?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(just kidding around).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But also_co_ the primary authors of the BabylonJS framework... are excellently kind.  So_co_ grab that engine.js and hack that puppy until it does what you want_co_ and even put your name on it afterwards!  (Even though you_t_ll know you owe some creds.)  heh_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The point is...  its open source_co_ its JS_co_ just whack it into doing whatever you want it to do.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  That_t_s the delicious part.  And we got cool collab in our forum_co_ too_co_ eh? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__qt_Not sure if I might check out Babylon.js more in the future or not_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@chg - help a few forum users... by fixing their playgrounds_co_ and in 90 days... we_t_ll own you.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  You_t_ll be so addicted to BJS that you_t_ll never look back.  I think you_t_d make an excellent framework hacker/devver_co_ chg.  I think you should just stick around with us_co_ and help us torture stuff and blow stuff up. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]