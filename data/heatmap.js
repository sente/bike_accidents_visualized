 var accidents = [ new google.maps.LatLng(42.3631821, -71.0976772),
new google.maps.LatLng(42.358261, -71.100746),
new google.maps.LatLng(42.3749177, -71.1100676),
new google.maps.LatLng(42.3626897, -71.0900485),
new google.maps.LatLng(42.374133, -71.119269),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3573756, -71.1080122),
new google.maps.LatLng(42.3647784, -71.0894878),
new google.maps.LatLng(42.3619987, -71.1143181),
new google.maps.LatLng(42.3600091, -71.087638),
new google.maps.LatLng(42.362647, -71.0990652),
new google.maps.LatLng(42.3691586, -71.1107379),
new google.maps.LatLng(42.3682981, -71.1017427),
new google.maps.LatLng(42.3630085, -71.0838894),
new google.maps.LatLng(42.3918358, -71.1209863),
new google.maps.LatLng(42.366743, -71.0945266),
new google.maps.LatLng(42.3690863, -71.1013863),
new google.maps.LatLng(42.373055, -71.0864747),
new google.maps.LatLng(42.3664103, -71.105406),
new google.maps.LatLng(42.367865, -71.0973684),
new google.maps.LatLng(42.3646216, -71.1024217),
new google.maps.LatLng(42.379998, -71.1199791),
new google.maps.LatLng(42.3999499, -71.1375426),
new google.maps.LatLng(42.3622704, -71.1135371),
new google.maps.LatLng(42.3551175, -71.1102278),
new google.maps.LatLng(42.3953744, -71.1278932),
new google.maps.LatLng(42.3684416, -71.0970261),
new google.maps.LatLng(42.3641825, -71.1177462),
new google.maps.LatLng(42.3727618, -71.1097379),
new google.maps.LatLng(42.3632079, -71.0967089),
new google.maps.LatLng(42.3721047, -71.0882983),
new google.maps.LatLng(42.3727138, -71.0936146),
new google.maps.LatLng(42.3953744, -71.1278932),
new google.maps.LatLng(42.3608181, -71.0960318),
new google.maps.LatLng(42.3824208, -71.1310038),
new google.maps.LatLng(42.3714098, -71.117051),
new google.maps.LatLng(42.3662019, -71.086068),
new google.maps.LatLng(42.3752502, -71.1459271),
new google.maps.LatLng(42.3727138, -71.0936146),
new google.maps.LatLng(42.377939, -71.119702),
new google.maps.LatLng(42.3724087, -71.0906765),
new google.maps.LatLng(42.371955, -71.089215),
new google.maps.LatLng(42.3858424, -71.1192159),
new google.maps.LatLng(42.3756207, -71.1449885),
new google.maps.LatLng(42.3670949, -71.0954058),
new google.maps.LatLng(42.3704848, -71.096879),
new google.maps.LatLng(42.369026, -71.099714),
new google.maps.LatLng(42.3618641, -71.0905626),
new google.maps.LatLng(42.3674154, -71.1070401),
new google.maps.LatLng(42.3730155, -71.0953218),
new google.maps.LatLng(42.3711226, -71.0862856),
new google.maps.LatLng(42.3534576, -71.1061929),
new google.maps.LatLng(42.3608181, -71.0960318),
new google.maps.LatLng(42.3744028, -71.1060846),
new google.maps.LatLng(42.3669946, -71.0978463),
new google.maps.LatLng(42.3979323, -71.1309262),
new google.maps.LatLng(42.3648613, -71.0962564),
new google.maps.LatLng(42.3723955, -71.0988837),
new google.maps.LatLng(42.3657954, -71.0920726),
new google.maps.LatLng(42.3629518, -71.0995844),
new google.maps.LatLng(42.379661, -71.1246832),
new google.maps.LatLng(42.3744753, -71.114562),
new google.maps.LatLng(42.3762351, -71.1256545),
new google.maps.LatLng(42.3724383, -71.1022585),
new google.maps.LatLng(42.370075, -71.112382),
new google.maps.LatLng(42.3727534, -71.0932842),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3945048, -71.1270669),
new google.maps.LatLng(42.3600091, -71.087638),
new google.maps.LatLng(42.375825, -71.125167),
new google.maps.LatLng(42.3950629, -71.1276917),
new google.maps.LatLng(42.3581889, -71.0931051),
new google.maps.LatLng(42.3734774, -71.1005336),
new google.maps.LatLng(42.3909539, -71.1222127),
new google.maps.LatLng(42.3868901, -71.1190822),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3960556, -71.1286692),
new google.maps.LatLng(42.3895796, -71.1201103),
new google.maps.LatLng(42.372909, -71.0998147),
new google.maps.LatLng(42.3651385, -71.1062018),
new google.maps.LatLng(42.3909539, -71.1222127),
new google.maps.LatLng(42.3727534, -71.0932842),
new google.maps.LatLng(42.3704848, -71.096879),
new google.maps.LatLng(42.3599185, -71.1017053),
new google.maps.LatLng(42.376466, -71.1564935),
new google.maps.LatLng(42.3670949, -71.0954058),
new google.maps.LatLng(42.369626, -71.1008462),
new google.maps.LatLng(42.3762351, -71.1256545),
new google.maps.LatLng(42.3979323, -71.1309262),
new google.maps.LatLng(42.367619, -71.1113869),
new google.maps.LatLng(42.3617348, -71.0975628),
new google.maps.LatLng(42.3722152, -71.1156066),
new google.maps.LatLng(42.367619, -71.1113869),
new google.maps.LatLng(42.3654283, -71.0911269),
new google.maps.LatLng(42.3912112, -71.1227587),
new google.maps.LatLng(42.3855365, -71.1322014),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3927003, -71.1248995),
new google.maps.LatLng(42.3653579, -71.1035991),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3853756, -71.1194097),
new google.maps.LatLng(42.3923013, -71.1242455),
new google.maps.LatLng(42.370305, -71.104197),
new google.maps.LatLng(42.3744028, -71.1060846),
new google.maps.LatLng(42.378906, -71.1483499),
new google.maps.LatLng(42.3739105, -71.1126782),
new google.maps.LatLng(42.3632079, -71.0967089),
new google.maps.LatLng(42.3727618, -71.1097379),
new google.maps.LatLng(42.3709414, -71.1072911),
new google.maps.LatLng(42.3765687, -71.1221826),
new google.maps.LatLng(42.3650836, -71.1031749),
new google.maps.LatLng(42.3733631, -71.1199003),
new google.maps.LatLng(42.361363, -71.096956),
new google.maps.LatLng(42.3693239, -71.1010401),
new google.maps.LatLng(42.3899461, -71.1202997),
new google.maps.LatLng(42.3632079, -71.0967089),
new google.maps.LatLng(42.3828592, -71.1198599),
new google.maps.LatLng(42.3704026, -71.1037709),
new google.maps.LatLng(42.3729102, -71.0945012),
new google.maps.LatLng(42.3706192, -71.1038761),
new google.maps.LatLng(42.393068, -71.128563),
new google.maps.LatLng(42.3707636, -71.1046875),
new google.maps.LatLng(42.3909539, -71.1222127),
new google.maps.LatLng(42.3761753, -71.1407075),
new google.maps.LatLng(42.364162, -71.0994873),
new google.maps.LatLng(42.3709136, -71.0999136),
new google.maps.LatLng(42.3721205, -71.0884358),
new google.maps.LatLng(42.3912112, -71.1227587),
new google.maps.LatLng(42.3927003, -71.1248995),
new google.maps.LatLng(42.3626897, -71.0900485),
new google.maps.LatLng(42.3756753, -71.143093),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3619862, -71.0979631),
new google.maps.LatLng(42.3940335, -71.1399671),
new google.maps.LatLng(42.3734692, -71.1002289),
new google.maps.LatLng(42.3714161, -71.1211008),
new google.maps.LatLng(42.3749391, -71.1397404),
new google.maps.LatLng(42.3744368, -71.1264256),
new google.maps.LatLng(42.3612135, -71.0926616),
new google.maps.LatLng(42.365843, -71.1023139),
new google.maps.LatLng(42.3683792, -71.1087841),
new google.maps.LatLng(42.3700717, -71.1029309),
new google.maps.LatLng(42.37407, -71.124289),
new google.maps.LatLng(42.377804, -71.119942),
new google.maps.LatLng(42.3727618, -71.1097379),
new google.maps.LatLng(42.367865, -71.0973684),
new google.maps.LatLng(42.373101, -71.1003335),
new google.maps.LatLng(42.375714, -71.1476983),
new google.maps.LatLng(42.3682981, -71.1017427),
new google.maps.LatLng(42.3640433, -71.0874256),
new google.maps.LatLng(42.3601476, -71.1127833),
new google.maps.LatLng(42.3683792, -71.1087841),
new google.maps.LatLng(42.3665349, -71.1052019),
new google.maps.LatLng(42.3732442, -71.0970897),
new google.maps.LatLng(42.374756, -71.1088182),
new google.maps.LatLng(42.3707452, -71.1151833),
new google.maps.LatLng(42.3714161, -71.1211008),
new google.maps.LatLng(42.3723208, -71.1218531),
new google.maps.LatLng(42.3644325, -71.1020946),
new google.maps.LatLng(42.3838409, -71.1340906),
new google.maps.LatLng(42.3783054, -71.1200399),
new google.maps.LatLng(42.3927003, -71.1248995),
new google.maps.LatLng(42.3613308, -71.0920694),
new google.maps.LatLng(42.3987644, -71.1317867),
new google.maps.LatLng(42.3675535, -71.1075838),
new google.maps.LatLng(42.3708297, -71.1048575),
new google.maps.LatLng(42.3652169, -71.090049),
new google.maps.LatLng(42.361363, -71.096956),
new google.maps.LatLng(42.3640433, -71.0874256),
new google.maps.LatLng(42.3643097, -71.1160607),
new google.maps.LatLng(42.3723208, -71.1218531),
new google.maps.LatLng(42.3657954, -71.0920726),
new google.maps.LatLng(42.3712873, -71.1212115),
new google.maps.LatLng(42.3834208, -71.1240014),
new google.maps.LatLng(42.3704848, -71.096879),
new google.maps.LatLng(42.3632811, -71.1105377),
new google.maps.LatLng(42.3833152, -71.1256652),
new google.maps.LatLng(42.3853756, -71.1194097),
new google.maps.LatLng(42.3588368, -71.1155992),
new google.maps.LatLng(42.3555939, -71.1113066),
new google.maps.LatLng(42.3669957, -71.106348),
new google.maps.LatLng(42.3677164, -71.1075224),
new google.maps.LatLng(42.3608181, -71.0960318),
new google.maps.LatLng(42.3700717, -71.1029309),
new google.maps.LatLng(42.3896214, -71.1481302),
new google.maps.LatLng(42.3670949, -71.0954058),
new google.maps.LatLng(42.3453608, -71.0870451),
new google.maps.LatLng(42.3659733, -71.1046701),
new google.maps.LatLng(42.3700834, -71.1133241),
new google.maps.LatLng(42.3693239, -71.1010401),
new google.maps.LatLng(42.3714161, -71.1211008),
new google.maps.LatLng(42.3582012, -71.1097055),
new google.maps.LatLng(42.3668585, -71.0924907),
new google.maps.LatLng(42.3731757, -71.0964566),
new google.maps.LatLng(42.369925, -71.0961941),
new google.maps.LatLng(42.3624262, -71.1017114),
new google.maps.LatLng(42.3616884, -71.1134457),
new google.maps.LatLng(42.3737254, -71.10083),
new google.maps.LatLng(42.3860159, -71.1190439),
new google.maps.LatLng(42.3708593, -71.078596),
new google.maps.LatLng(42.372846, -71.0997612),
new google.maps.LatLng(42.3888018, -71.1194946),
new google.maps.LatLng(42.3725252, -71.0916422),
new google.maps.LatLng(42.3650739, -71.1069534),
new google.maps.LatLng(42.373693, -71.1007656),
new google.maps.LatLng(42.3697486, -71.1058621),
new google.maps.LatLng(42.365013, -71.102406),
new google.maps.LatLng(42.364162, -71.0994873),
new google.maps.LatLng(42.3837986, -71.1195808),
new google.maps.LatLng(42.3703582, -71.1133199),
new google.maps.LatLng(42.3704026, -71.1037709),
new google.maps.LatLng(42.3736158, -71.1097335),
new google.maps.LatLng(42.3581889, -71.0931051),
new google.maps.LatLng(42.3729102, -71.0945012),
new google.maps.LatLng(42.3617348, -71.0975628),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3714097, -71.0953342),
new google.maps.LatLng(42.369715, -71.102064),
new google.maps.LatLng(42.3808464, -71.1197805),
new google.maps.LatLng(42.391819, -71.11927),
new google.maps.LatLng(42.3721047, -71.0882983),
new google.maps.LatLng(42.388606, -71.142456),
new google.maps.LatLng(42.3740212, -71.1030628),
new google.maps.LatLng(42.371907, -71.0880602),
new google.maps.LatLng(42.3710834, -71.1161203),
new google.maps.LatLng(42.3668117, -71.0924075),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3714161, -71.1211008),
new google.maps.LatLng(42.3755098, -71.1143185),
new google.maps.LatLng(42.3608181, -71.0960318),
new google.maps.LatLng(42.3738336, -71.1124428),
new google.maps.LatLng(42.3740909, -71.1118503),
new google.maps.LatLng(42.3727534, -71.0932842),
new google.maps.LatLng(42.379998, -71.1199791),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.3868436, -71.1192457),
new google.maps.LatLng(42.369925, -71.0961941),
new google.maps.LatLng(42.3700555, -71.0963795),
new google.maps.LatLng(42.3661092, -71.1052925),
new google.maps.LatLng(42.3888018, -71.1194946),
new google.maps.LatLng(42.3743407, -71.1135855),
new google.maps.LatLng(42.3611241, -71.0965498),
new google.maps.LatLng(42.3755098, -71.1143185),
new google.maps.LatLng(42.3629518, -71.0995844),
new google.maps.LatLng(42.3650219, -71.1027564),
new google.maps.LatLng(42.3656641, -71.109099),
new google.maps.LatLng(42.36994, -71.112009),
new google.maps.LatLng(42.3765687, -71.1221826),
new google.maps.LatLng(42.3744028, -71.1060846),
new google.maps.LatLng(42.3608181, -71.0960318),
new google.maps.LatLng(42.390248, -71.121502),
new google.maps.LatLng(42.3743407, -71.1135855),
new google.maps.LatLng(42.3753183, -71.1452231),
new google.maps.LatLng(42.3694062, -71.1033812),
new google.maps.LatLng(42.3755098, -71.1143185),
new google.maps.LatLng(42.3724087, -71.0906765),
new google.maps.LatLng(42.3759824, -71.1209987),
new google.maps.LatLng(42.369379, -71.085519),
new google.maps.LatLng(42.3692063, -71.1111812),
new google.maps.LatLng(42.3803964, -71.1275095),
new google.maps.LatLng(42.3608181, -71.0960318),
new google.maps.LatLng(42.3713201, -71.1060996),
new google.maps.LatLng(42.3647021, -71.1025516),
new google.maps.LatLng(42.3714161, -71.1211008),
new google.maps.LatLng(42.3721205, -71.0884358),
new google.maps.LatLng(42.3534404, -71.107137),
new google.maps.LatLng(42.3740212, -71.1030628),
new google.maps.LatLng(42.366072, -71.104238),
new google.maps.LatLng(42.3915953, -71.1232721),
new google.maps.LatLng(42.3747907, -71.1491185),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.3658689, -71.1045239),
new google.maps.LatLng(42.3647488, -71.0991577),
new google.maps.LatLng(42.3571144, -71.092534),
new google.maps.LatLng(42.3855365, -71.1322014),
new google.maps.LatLng(42.374855, -71.1223479),
new google.maps.LatLng(42.3691302, -71.0952129),
new google.maps.LatLng(42.3884323, -71.1192779),
new google.maps.LatLng(42.3727534, -71.0932842),
new google.maps.LatLng(42.3652169, -71.090049),
new google.maps.LatLng(42.3893996, -71.1200709),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3603595, -71.1024657),
new google.maps.LatLng(42.3588868, -71.0962334),
new google.maps.LatLng(42.367865, -71.0973684),
new google.maps.LatLng(42.3659846, -71.1050224),
new google.maps.LatLng(42.3945048, -71.1270669),
new google.maps.LatLng(42.3666022, -71.1056957),
new google.maps.LatLng(42.392543, -71.124291),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3815151, -71.1340945),
new google.maps.LatLng(42.3647021, -71.1025516),
new google.maps.LatLng(42.362647, -71.0990652),
new google.maps.LatLng(42.3625184, -71.0988138),
new google.maps.LatLng(42.3750511, -71.1185823),
new google.maps.LatLng(42.3670997, -71.0766499),
new google.maps.LatLng(42.3651501, -71.1033097),
new google.maps.LatLng(42.3853756, -71.1194097),
new google.maps.LatLng(42.3633336, -71.0983693),
new google.maps.LatLng(42.3703395, -71.1036126),
new google.maps.LatLng(42.3637576, -71.1012485),
new google.maps.LatLng(42.3581889, -71.0931051),
new google.maps.LatLng(42.3744088, -71.106239),
new google.maps.LatLng(42.3721047, -71.0882983),
new google.maps.LatLng(42.3897728, -71.1203033),
new google.maps.LatLng(42.3799687, -71.1197648),
new google.maps.LatLng(42.379998, -71.1199791),
new google.maps.LatLng(42.3614045, -71.1133421),
new google.maps.LatLng(42.3763508, -71.1397609),
new google.maps.LatLng(42.3600091, -71.087638),
new google.maps.LatLng(42.3752597, -71.112718),
new google.maps.LatLng(42.3846654, -71.1193294),
new google.maps.LatLng(42.3936904, -71.1362247),
new google.maps.LatLng(42.361363, -71.096956),
new google.maps.LatLng(42.3578666, -71.1054295),
new google.maps.LatLng(42.36836, -71.111426),
new google.maps.LatLng(42.3640226, -71.1083014),
new google.maps.LatLng(42.3716674, -71.0983024),
new google.maps.LatLng(42.3664089, -71.0954819),
new google.maps.LatLng(42.3636326, -71.1007225),
new google.maps.LatLng(42.371991, -71.0873071),
new google.maps.LatLng(42.3719887, -71.1215297),
new google.maps.LatLng(42.3693239, -71.1010401),
new google.maps.LatLng(42.3685185, -71.0990006),
new google.maps.LatLng(42.3735615, -71.0996511),
new google.maps.LatLng(42.3706651, -71.076903),
new google.maps.LatLng(42.3685756, -71.1091704),
new google.maps.LatLng(42.3657567, -71.1041543),
new google.maps.LatLng(42.3644733, -71.1138643),
new google.maps.LatLng(42.3617791, -71.0831227),
new google.maps.LatLng(42.372846, -71.0997612),
new google.maps.LatLng(42.3815726, -71.1163203),
new google.maps.LatLng(42.3589882, -71.1001219),
new google.maps.LatLng(42.3646216, -71.1024217),
new google.maps.LatLng(42.3753183, -71.1452231),
new google.maps.LatLng(42.3601137, -71.10997),
new google.maps.LatLng(42.369925, -71.0961941),
new google.maps.LatLng(42.3636314, -71.1007791),
new google.maps.LatLng(42.3936219, -71.1375246),
new google.maps.LatLng(42.3838672, -71.129315),
new google.maps.LatLng(42.3664564, -71.0934059),
new google.maps.LatLng(42.3682637, -71.0987596),
new google.maps.LatLng(42.3691085, -71.1041096),
new google.maps.LatLng(42.364522, -71.10307),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3733872, -71.0981542),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.377057, -71.1121103),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3733631, -71.1199003),
new google.maps.LatLng(42.3734889, -71.0989583),
new google.maps.LatLng(42.3619987, -71.1143181),
new google.maps.LatLng(42.3626897, -71.0900485),
new google.maps.LatLng(42.3713524, -71.0925292),
new google.maps.LatLng(42.3698901, -71.1168058),
new google.maps.LatLng(42.3759824, -71.1209987),
new google.maps.LatLng(42.3714161, -71.1211008),
new google.maps.LatLng(42.3870157, -71.1192567),
new google.maps.LatLng(42.3979323, -71.1309262),
new google.maps.LatLng(42.3652169, -71.090049),
new google.maps.LatLng(42.3765687, -71.1221826),
new google.maps.LatLng(42.3736693, -71.1005787),
new google.maps.LatLng(42.37342, -71.1195063),
new google.maps.LatLng(42.372819, -71.099253),
new google.maps.LatLng(42.3657326, -71.082371),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.3638909, -71.1011864),
new google.maps.LatLng(42.3791415, -71.1338458),
new google.maps.LatLng(42.3738336, -71.1124428),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3704848, -71.096879),
new google.maps.LatLng(42.3722982, -71.1151513),
new google.maps.LatLng(42.3732102, -71.1005089),
new google.maps.LatLng(42.366348, -71.1031405),
new google.maps.LatLng(42.3622015, -71.1014325),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3608181, -71.0960318),
new google.maps.LatLng(42.3634165, -71.1019284),
new google.maps.LatLng(42.3983071, -71.1313752),
new google.maps.LatLng(42.4478683, -71.2277773),
new google.maps.LatLng(42.3710834, -71.1161203),
new google.maps.LatLng(42.3714904, -71.098112),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3708297, -71.1048575),
new google.maps.LatLng(42.3881742, -71.11948),
new google.maps.LatLng(42.364545, -71.1130982),
new google.maps.LatLng(42.3668655, -71.0979443),
new google.maps.LatLng(42.3689584, -71.0802945),
new google.maps.LatLng(42.393056, -71.139985),
new google.maps.LatLng(42.3794429, -71.1257588),
new google.maps.LatLng(42.3737254, -71.10083),
new google.maps.LatLng(42.3845951, -71.1357947),
new google.maps.LatLng(42.3685185, -71.0990006),
new google.maps.LatLng(42.3735546, -71.0947462),
new google.maps.LatLng(42.3849231, -71.136526),
new google.maps.LatLng(42.372917, -71.099324),
new google.maps.LatLng(42.3812878, -71.1197109),
new google.maps.LatLng(42.3935055, -71.1331102),
new google.maps.LatLng(42.3814143, -71.1261404),
new google.maps.LatLng(42.3927003, -71.1248995),
new google.maps.LatLng(42.3716373, -71.1209264),
new google.maps.LatLng(42.357053, -71.104799),
new google.maps.LatLng(42.3719669, -71.1185733),
new google.maps.LatLng(42.361363, -71.096956),
new google.maps.LatLng(42.3721047, -71.0882983),
new google.maps.LatLng(42.3813772, -71.1293247),
new google.maps.LatLng(42.3612684, -71.0926159),
new google.maps.LatLng(42.3551104, -71.1103626),
new google.maps.LatLng(42.3843253, -71.116092),
new google.maps.LatLng(42.3643106, -71.1007459),
new google.maps.LatLng(42.3700834, -71.1133241),
new google.maps.LatLng(42.377968, -71.1078196),
new google.maps.LatLng(42.3813031, -71.1373342),
new google.maps.LatLng(42.369287, -71.101707),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.392543, -71.124291),
new google.maps.LatLng(42.395822, -71.1283799),
new google.maps.LatLng(42.3726041, -71.085284),
new google.maps.LatLng(42.3734774, -71.1005336),
new google.maps.LatLng(42.370075, -71.112382),
new google.maps.LatLng(42.3860159, -71.1190439),
new google.maps.LatLng(42.3682981, -71.0805644),
new google.maps.LatLng(42.3921579, -71.1246066),
new google.maps.LatLng(42.3733436, -71.1185736),
new google.maps.LatLng(42.3750911, -71.1145909),
new google.maps.LatLng(42.3748821, -71.1091473),
new google.maps.LatLng(42.3629518, -71.0995844),
new google.maps.LatLng(42.3714527, -71.1120087),
new google.maps.LatLng(42.3917366, -71.123923),
new google.maps.LatLng(42.374973, -71.148308),
new google.maps.LatLng(42.3738833, -71.1243726),
new google.maps.LatLng(42.3636567, -71.1008214),
new google.maps.LatLng(42.372909, -71.0998147),
new google.maps.LatLng(42.3953744, -71.1278932),
new google.maps.LatLng(42.373197, -71.1108385),
new google.maps.LatLng(42.3737254, -71.10083),
new google.maps.LatLng(42.3763208, -71.1156835),
new google.maps.LatLng(42.393805, -71.126675),
new google.maps.LatLng(42.3814143, -71.1261404),
new google.maps.LatLng(42.3836448, -71.1160924),
new google.maps.LatLng(42.3725805, -71.1087746),
new google.maps.LatLng(42.3622694, -71.082334),
new google.maps.LatLng(42.3283668, -71.0680082),
new google.maps.LatLng(42.3700963, -71.1129341),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.3717715, -71.098157),
new google.maps.LatLng(42.3886942, -71.1442093),
new google.maps.LatLng(42.3591244, -71.1110791),
new google.maps.LatLng(42.3622704, -71.1135371),
new google.maps.LatLng(42.372877, -71.100283),
new google.maps.LatLng(42.3649082, -71.1109538),
new google.maps.LatLng(42.3732231, -71.0943974),
new google.maps.LatLng(42.3657954, -71.0920726),
new google.maps.LatLng(42.3728132, -71.0936504),
new google.maps.LatLng(42.3704332, -71.1002306),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3904693, -71.1327241),
new google.maps.LatLng(42.3853756, -71.1194097),
new google.maps.LatLng(42.3736158, -71.1097335),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3841058, -71.1196761),
new google.maps.LatLng(42.3733872, -71.0981542),
new google.maps.LatLng(42.3870152, -71.1241631),
new google.maps.LatLng(42.387864, -71.118707),
new google.maps.LatLng(42.3753183, -71.1452231),
new google.maps.LatLng(42.3981455, -71.1312062),
new google.maps.LatLng(42.3974464, -71.130226),
new google.maps.LatLng(42.386836, -71.157794),
new google.maps.LatLng(42.3625606, -71.0882354),
new google.maps.LatLng(42.3706192, -71.1038761),
new google.maps.LatLng(42.3685879, -71.1135115),
new google.maps.LatLng(42.3710199, -71.0798451),
new google.maps.LatLng(42.3736158, -71.1097335),
new google.maps.LatLng(42.3654087, -71.0987623),
new google.maps.LatLng(42.3888018, -71.1194946),
new google.maps.LatLng(42.3703395, -71.1036126),
new google.maps.LatLng(42.3724087, -71.0906765),
new google.maps.LatLng(42.374973, -71.148308),
new google.maps.LatLng(42.3723955, -71.0988837),
new google.maps.LatLng(42.3888018, -71.1194946),
new google.maps.LatLng(42.3902584, -71.1210496),
new google.maps.LatLng(42.37455, -71.108631),
new google.maps.LatLng(42.3737254, -71.10083),
new google.maps.LatLng(42.3700963, -71.1129341),
new google.maps.LatLng(42.3855365, -71.1322014),
new google.maps.LatLng(42.3682981, -71.1017427),
new google.maps.LatLng(42.3897728, -71.1203033),
new google.maps.LatLng(42.3663797, -71.0819949),
new google.maps.LatLng(42.3704848, -71.096879),
new google.maps.LatLng(42.3749145, -71.1093951),
new google.maps.LatLng(42.3735625, -71.1187584),
new google.maps.LatLng(42.3724086, -71.0907764),
new google.maps.LatLng(42.390305, -71.150149),
new google.maps.LatLng(42.3714904, -71.098112),
new google.maps.LatLng(42.3728132, -71.0936504),
new google.maps.LatLng(42.3663022, -71.0917948),
new google.maps.LatLng(42.3704332, -71.1002306),
new google.maps.LatLng(42.364019, -71.0881025),
new google.maps.LatLng(42.3980803, -71.1306358),
new google.maps.LatLng(42.3736745, -71.1005265),
new google.maps.LatLng(42.3626897, -71.0900485),
new google.maps.LatLng(42.3583279, -71.0985595),
new google.maps.LatLng(42.3623911, -71.0872673),
new google.maps.LatLng(42.3714904, -71.098112),
new google.maps.LatLng(42.3759381, -71.1244587),
new google.maps.LatLng(42.3759381, -71.1244587),
new google.maps.LatLng(42.3696847, -71.1031906),
new google.maps.LatLng(42.3871076, -71.1190709),
new google.maps.LatLng(42.3844831, -71.1196052),
new google.maps.LatLng(42.362647, -71.0990652),
new google.maps.LatLng(42.367876, -71.099896),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.374756, -71.1088182),
new google.maps.LatLng(42.3710199, -71.0798451),
new google.maps.LatLng(42.3727138, -71.0936146),
new google.maps.LatLng(42.3936904, -71.1362247),
new google.maps.LatLng(42.3722128, -71.0989926),
new google.maps.LatLng(42.377804, -71.119942),
new google.maps.LatLng(42.3984495, -71.1315654),
new google.maps.LatLng(42.3908787, -71.1572343),
new google.maps.LatLng(42.3661309, -71.1028141),
new google.maps.LatLng(42.3770097, -71.1123399),
new google.maps.LatLng(42.3778418, -71.130187),
new google.maps.LatLng(42.367865, -71.0973684),
new google.maps.LatLng(42.367955, -71.0938),
new google.maps.LatLng(42.3739151, -71.1021843),
new google.maps.LatLng(42.3739376, -71.1010621),
new google.maps.LatLng(42.3730155, -71.0953218),
new google.maps.LatLng(42.3727618, -71.1097379),
new google.maps.LatLng(42.3735071, -71.0997444),
new google.maps.LatLng(42.3729102, -71.0945012),
new google.maps.LatLng(42.3768089, -71.1276484),
new google.maps.LatLng(42.3740212, -71.1030628),
new google.maps.LatLng(42.3573232, -71.1008504),
new google.maps.LatLng(42.3909095, -71.1575631),
new google.maps.LatLng(42.3625606, -71.0882354),
new google.maps.LatLng(42.3702547, -71.1177534),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3647784, -71.0894878),
new google.maps.LatLng(42.3907012, -71.1221672),
new google.maps.LatLng(42.3626897, -71.0900485),
new google.maps.LatLng(42.3736803, -71.0945336),
new google.maps.LatLng(42.3646216, -71.1024217),
new google.maps.LatLng(42.3566315, -71.1067326),
new google.maps.LatLng(42.3845951, -71.1357947),
new google.maps.LatLng(42.3817369, -71.1196856),
new google.maps.LatLng(42.3700886, -71.0944257),
new google.maps.LatLng(42.3837986, -71.1195808),
new google.maps.LatLng(42.3830474, -71.1196761),
new google.maps.LatLng(42.3729111, -71.0943818),
new google.maps.LatLng(42.363077, -71.0947847),
new google.maps.LatLng(42.3734774, -71.1005336),
new google.maps.LatLng(42.3737254, -71.10083),
new google.maps.LatLng(42.3692712, -71.0900913),
new google.maps.LatLng(42.369925, -71.0961941),
new google.maps.LatLng(42.3635889, -71.1009831),
new google.maps.LatLng(42.362647, -71.0990652),
new google.maps.LatLng(42.3721672, -71.1205),
new google.maps.LatLng(42.3719239, -71.0868792),
new google.maps.LatLng(42.362647, -71.0990652),
new google.maps.LatLng(42.3714904, -71.098112),
new google.maps.LatLng(42.375196, -71.1122227),
new google.maps.LatLng(42.3887092, -71.1176458),
new google.maps.LatLng(42.3742316, -71.1047258),
new google.maps.LatLng(42.373774, -71.102974),
new google.maps.LatLng(42.3704873, -71.1144672),
new google.maps.LatLng(42.3704848, -71.096879),
new google.maps.LatLng(42.3727534, -71.0932842),
new google.maps.LatLng(42.3726399, -71.093872),
new google.maps.LatLng(42.369925, -71.0961941),
new google.maps.LatLng(42.3650836, -71.1031749),
new google.maps.LatLng(42.3768494, -71.1560317),
new google.maps.LatLng(42.3901357, -71.1506873),
new google.maps.LatLng(42.3628727, -71.1024328),
new google.maps.LatLng(42.3646216, -71.1024217),
new google.maps.LatLng(42.3654283, -71.0911269),
new google.maps.LatLng(42.3702547, -71.1177534),
new google.maps.LatLng(42.379998, -71.1199791),
new google.maps.LatLng(42.363453, -71.1007676),
new google.maps.LatLng(42.3753183, -71.1452231),
new google.maps.LatLng(42.3987981, -71.1320086),
new google.maps.LatLng(42.3704848, -71.096879),
new google.maps.LatLng(42.3706651, -71.1000866),
new google.maps.LatLng(42.3898864, -71.1204233),
new google.maps.LatLng(42.3683758, -71.0905737),
new google.maps.LatLng(42.366348, -71.1031405),
new google.maps.LatLng(42.382063, -71.1267338),
new google.maps.LatLng(42.3613652, -71.0966865),
new google.maps.LatLng(42.3667376, -71.115371),
new google.maps.LatLng(42.3738336, -71.1124428),
new google.maps.LatLng(42.3663022, -71.0917948),
new google.maps.LatLng(42.3710278, -71.097541),
new google.maps.LatLng(42.3729111, -71.0943818),
new google.maps.LatLng(42.3647021, -71.1025516),
new google.maps.LatLng(42.3945048, -71.1270669),
new google.maps.LatLng(42.3912318, -71.1224047),
new google.maps.LatLng(42.3687439, -71.101705),
new google.maps.LatLng(42.3820501, -71.1198868),
new google.maps.LatLng(42.3573756, -71.1080122),
new google.maps.LatLng(42.3730046, -71.0887753),
new google.maps.LatLng(42.3773745, -71.1105974),
new google.maps.LatLng(42.3663022, -71.0917948),
new google.maps.LatLng(42.3822382, -71.1197461),
new google.maps.LatLng(42.3766969, -71.1138081),
new google.maps.LatLng(42.3600462, -71.0978232),
new google.maps.LatLng(42.3683792, -71.1087841),
new google.maps.LatLng(42.3752597, -71.112718),
new google.maps.LatLng(42.3644733, -71.1138643),
new google.maps.LatLng(42.3718419, -71.098379),
new google.maps.LatLng(42.363453, -71.1007676),
new google.maps.LatLng(42.3534576, -71.1061929),
new google.maps.LatLng(42.3747002, -71.1083689),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.3813308, -71.15475),
new google.maps.LatLng(42.3656114, -71.1040552),
new google.maps.LatLng(42.3683137, -71.1107432),
new google.maps.LatLng(42.3817369, -71.1196856),
new google.maps.LatLng(42.3814234, -71.1358106),
new google.maps.LatLng(42.3909726, -71.1572632),
new google.maps.LatLng(42.3632079, -71.0967089),
new google.maps.LatLng(42.3646216, -71.1024217),
new google.maps.LatLng(42.3700717, -71.1029309),
new google.maps.LatLng(42.3815192, -71.1193817),
new google.maps.LatLng(42.3778418, -71.130187),
new google.maps.LatLng(42.3672274, -71.0777256),
new google.maps.LatLng(42.3607104, -71.1008914),
new google.maps.LatLng(42.3744608, -71.1267733),
new google.maps.LatLng(42.3708137, -71.1138888),
new google.maps.LatLng(42.35917, -71.095474),
new google.maps.LatLng(42.3719669, -71.1185733),
new google.maps.LatLng(42.3838672, -71.129315),
new google.maps.LatLng(42.3559916, -71.1120042),
new google.maps.LatLng(42.3912318, -71.1224047),
new google.maps.LatLng(42.3684247, -71.0943576),
new google.maps.LatLng(42.3634089, -71.0993755),
new google.maps.LatLng(42.3736158, -71.1097335),
new google.maps.LatLng(42.3694062, -71.1033812),
new google.maps.LatLng(42.3755098, -71.1143185),
new google.maps.LatLng(42.3999902, -71.1337536),
new google.maps.LatLng(42.3629743, -71.0936428),
new google.maps.LatLng(42.367865, -71.0973684),
new google.maps.LatLng(42.3710349, -71.1161693),
new google.maps.LatLng(42.3752597, -71.112718),
new google.maps.LatLng(42.378109, -71.123921),
new google.maps.LatLng(42.3797397, -71.1217135),
new google.maps.LatLng(42.3664103, -71.105406),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.379998, -71.1199791),
new google.maps.LatLng(42.3683792, -71.1087841),
new google.maps.LatLng(42.3640433, -71.0874256),
new google.maps.LatLng(42.3626247, -71.0843649),
new google.maps.LatLng(42.3682964, -71.1023147),
new google.maps.LatLng(42.3642427, -71.0995941),
new google.maps.LatLng(42.3748821, -71.1091473),
new google.maps.LatLng(42.367759, -71.1110947),
new google.maps.LatLng(42.3674401, -71.0793841),
new google.maps.LatLng(42.3732149, -71.1136866),
new google.maps.LatLng(42.375269, -71.110855),
new google.maps.LatLng(42.3683137, -71.1107432),
new google.maps.LatLng(42.3994574, -71.1322381),
new google.maps.LatLng(42.374973, -71.148308),
new google.maps.LatLng(42.3650219, -71.1027564),
new google.maps.LatLng(42.3626897, -71.0900485),
new google.maps.LatLng(42.3813031, -71.1373342),
new google.maps.LatLng(42.3719239, -71.0868792),
new google.maps.LatLng(42.3776453, -71.1231611),
new google.maps.LatLng(42.3729102, -71.0945012),
new google.maps.LatLng(42.3728132, -71.0936504),
new google.maps.LatLng(42.3766321, -71.1140944),
new google.maps.LatLng(42.3741288, -71.1189927),
new google.maps.LatLng(42.3663022, -71.0917948),
new google.maps.LatLng(42.3632079, -71.0967089),
new google.maps.LatLng(42.359184, -71.093544),
new google.maps.LatLng(42.3685185, -71.0990006),
new google.maps.LatLng(42.3699025, -71.0961422),
new google.maps.LatLng(42.3692063, -71.1111812),
new google.maps.LatLng(42.3714098, -71.117051),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.3907012, -71.1221672),
new google.maps.LatLng(42.370921, -71.080894),
new google.maps.LatLng(42.3639493, -71.0834123),
new google.maps.LatLng(42.3716527, -71.0847941),
new google.maps.LatLng(42.3752502, -71.1459271),
new google.maps.LatLng(42.377185, -71.12324),
new google.maps.LatLng(42.3663022, -71.0917948),
new google.maps.LatLng(42.3815151, -71.1340945),
new google.maps.LatLng(42.3732847, -71.1229786),
new google.maps.LatLng(42.3724556, -71.1202231),
new google.maps.LatLng(42.3794429, -71.1257588),
new google.maps.LatLng(42.3690365, -71.0951492),
new google.maps.LatLng(42.3737394, -71.1015548),
new google.maps.LatLng(42.3629462, -71.0850772),
new google.maps.LatLng(42.3697927, -71.1224694),
new google.maps.LatLng(42.3568724, -71.1135698),
new google.maps.LatLng(42.3697281, -71.1020974),
new google.maps.LatLng(42.3748203, -71.1144267),
new google.maps.LatLng(42.362647, -71.0990652),
new google.maps.LatLng(42.380377, -71.1194186),
new google.maps.LatLng(42.3725577, -71.085152),
new google.maps.LatLng(42.3728914, -71.1219422),
new google.maps.LatLng(42.3663022, -71.0917948),
new google.maps.LatLng(42.3629743, -71.0936428),
new google.maps.LatLng(42.40261, -71.134446),
new google.maps.LatLng(42.3656114, -71.1040552),
new google.maps.LatLng(42.3629905, -71.0949967),
new google.maps.LatLng(42.364162, -71.0994873),
new google.maps.LatLng(42.367427, -71.095634),
new google.maps.LatLng(42.3601382, -71.0948792),
new google.maps.LatLng(42.3752597, -71.112718),
new google.maps.LatLng(42.372855, -71.09603),
new google.maps.LatLng(42.3601646, -71.1105324),
new google.maps.LatLng(42.3917366, -71.123923),
new google.maps.LatLng(42.3799709, -71.1445372),
new google.maps.LatLng(42.3608181, -71.0960318),
new google.maps.LatLng(42.373573, -71.1228864),
new google.maps.LatLng(42.3842253, -71.1192756),
new google.maps.LatLng(42.3647784, -71.0894878),
new google.maps.LatLng(42.3672122, -71.1064598),
new google.maps.LatLng(42.3736745, -71.1005265),
new google.maps.LatLng(42.3718469, -71.0985703),
new google.maps.LatLng(42.3652169, -71.090049),
new google.maps.LatLng(42.3682017, -71.0981883),
new google.maps.LatLng(42.3654283, -71.0911269),
new google.maps.LatLng(42.3914213, -71.1232057),
new google.maps.LatLng(42.3893996, -71.1200709),
new google.maps.LatLng(42.3644733, -71.1138643),
new google.maps.LatLng(42.369704, -71.101997),
new google.maps.LatLng(42.3944135, -71.1269879),
new google.maps.LatLng(42.3900709, -71.1206237),
new google.maps.LatLng(42.3753183, -71.1452231),
new google.maps.LatLng(42.3736745, -71.1005265),
new google.maps.LatLng(42.367955, -71.0938),
new google.maps.LatLng(42.3684672, -71.0985765),
new google.maps.LatLng(42.3953744, -71.1278932),
new google.maps.LatLng(42.3814234, -71.1358106),
new google.maps.LatLng(42.3874118, -71.1275457),
new google.maps.LatLng(42.3736745, -71.1005265),
new google.maps.LatLng(42.3848285, -71.1194676),
new google.maps.LatLng(42.382738, -71.120062),
new google.maps.LatLng(42.3617348, -71.0975628),
new google.maps.LatLng(42.361363, -71.096956),
new google.maps.LatLng(42.3714904, -71.098112),
new google.maps.LatLng(42.3644325, -71.1020946),
new google.maps.LatLng(42.3725619, -71.0918152) ]; 