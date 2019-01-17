[{"Owner":"david028","Date":"2016-03-17T16:38:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi I am learning to write shaders and I have noticed that there are a lot of different view spaces and it is not always easy to differentiate and test the output without the ability to rotate the object. It gets more complicated when spaces have to be combined such as bump mapping + environment mapping.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ in the cell shading demo I notice that the spot light appears to stick to the object and I would want to know if this was because I am orbiting the light source or if it would remain static when I rotated the object alone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to rotate the object without orbiting the camera on the CYOS site? Could this feature be added if not?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-03-17T16:57:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi use this 2d and 3d functions\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  vec2  rotate_xy(vec2 pr1_co_vec2  pr2_co_float alpha) {vec2 pp2 _eq_ vec2( pr2.x - pr1.x_co_   pr2.y - pr1.y )_sm_return  vec2( pr1.x + pp2.x * cos(alpha*3.14159265/180.) - pp2.y * sin(alpha*3.14159265/180.)_co_pr1.y + pp2.x * sin(alpha*3.14159265/180.) + pp2.y * cos(alpha*3.14159265/180.))_sm_}\nvec3  r_y(vec3 n_co_ float a_co_vec3 c) {vec3 c1 _eq_ vec3( c.x_co_  c.y_co_   c.z )_sm_c1.x _eq_ c1.x_sm_c1.y _eq_ c1.z_sm_vec2 p _eq_ rotate_xy(vec2(c1.x_co_c1.y)_co_ vec2( n.x_co_  n.z )_co_ a)_sm_n.x _eq_ p.x_sm_n.z _eq_ p.y_sm_return n_sm_ } \n vec3  r_x(vec3 n_co_ float a_co_vec3 c) {vec3 c1 _eq_ vec3( c.x_co_  c.y_co_   c.z )_sm_c1.x _eq_ c1.y_sm_c1.y _eq_ c1.z_sm_vec2 p _eq_ rotate_xy(vec2(c1.x_co_c1.y)_co_ vec2( n.y_co_  n.z )_co_ a)_sm_n.y _eq_ p.x_sm_n.z _eq_ p.y_sm_return n_sm_ } \n vec3  r_z(vec3 n_co_ float a_co_vec3 c) {  vec3 c1 _eq_ vec3( c.x_co_  c.y_co_   c.z )_sm_vec2 p _eq_ rotate_xy(vec2(c1.x_co_c1.y)_co_ vec2( n.x_co_  n.y )_co_ a)_sm_n.x _eq_ p.x_sm_n.y _eq_ p.y_sm_return n_sm_ }\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs.com/cyos/#NF2XL_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/cyos/#NF2XL_lt_/a_gt_ without normal\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs.com/cyos/#NF2XL%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/cyos/#NF2XL#1_lt_/a_gt_ with normal\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\trotate_xy( [ point 1] _co_  [ point 2 ] _co_ [ angle _dd_ deg]    )   rotate point1 around point 2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tr_x or r_y or r_z ( [vec3_dd_point] _co_ [angle_dd_ deg ] _co_ [vec3_dd_ center] ) rotate point around center in x or y or z\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs.com/cyos/#NF2XL%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/cyos/#NF2XL#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t* dont forget  normal always need rotate in   center point\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs.com/cyos/#NF2XL%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/cyos/#NF2XL#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]