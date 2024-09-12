'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bdaaec1f5e063220e8b7ecb493c07537",
"version.json": "eaabc39a5d2e6d0252c7825a0d327d7f",
"logo_title.svg": "aafac5a3dd5f2208c4f211f81c9a42c0",
"favicon.ico": "f4fd1627bc78c6dc69609701b7d0fb05",
"index.html": "b75217c8b40ec54528e239afbaef9f92",
"/": "b75217c8b40ec54528e239afbaef9f92",
"main.dart.js": "8a131cadc7368a6c70019b84dbdaa1e0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"README.md": "759ee99a62dd12b35a939b71bf435a77",
"script.js": "0db636ba8a1192470c0a07f094141607",
"favicon.png": "3519a1048193c5d3daecbf55060583d1",
"icons/Icon-192.png": "6b697f1e1d5d9899a28257a011bd3ebe",
"icons/Icon-maskable-192.png": "a207baed9620bd9f106465e85fde4044",
"icons/Icon-maskable-512.png": "4297e9283f46e4f15e62bb10a190f070",
"icons/Icon-512.png": "aa45140c748164add386b6d6909a0dca",
"manifest.json": "2492728f5e17f80c321d4abd9a05ffac",
"manifest.webmanifest": "3b8c1bc9eca23c500d0608c8ca9cf018",
".git/config": "13c5d62e6a86546b8c7fa29dfbe2778b",
".git/objects/pack/pack-75f8d784ac2d262f2a16a9668425513ce4997c76.idx": "47bd64428ee49d6f7c46aac81f53c573",
".git/objects/pack/pack-75f8d784ac2d262f2a16a9668425513ce4997c76.pack": "e037f8f2e7a33b3d9a2d0faefd6a8d2a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "fc6d103bad88503f1be7a9a643a45c10",
".git/logs/refs/heads/master": "fc6d103bad88503f1be7a9a643a45c10",
".git/logs/refs/remotes/origin/master": "dfde57e1fa272a4d0f3e37737522f3ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "f08ab9088ac2d60523c7cf4f3d3c7490",
".git/refs/remotes/origin/master": "f08ab9088ac2d60523c7cf4f3d3c7490",
".git/index": "31a5732fb2e1ff962c727c74d2b6ee62",
".git/FETCH_HEAD": "6b5fd263d14afd6625d8783334e9e80f",
"assets/shorebird.yaml": "32e5a35a421c58a2abc9971f6a350c31",
"assets/environments/env_dev": "029a2ec0a15a183f53980afd01b5176a",
"assets/environments/env_prod": "57762ea6a5ed44bd43bcbceab2beccf3",
"assets/AssetManifest.json": "ca0474de61d8e8ffe33f80e43c4d94dc",
"assets/NOTICES": "2b471bc4f11bcf7ab45d2bb3c6d4e6db",
"assets/FontManifest.json": "e1cf9910b55725ec9348de5be7b8a168",
"assets/AssetManifest.bin.json": "5859485c0fde2e8bc4fe95d81ae9ae26",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fd14f9197985d3617408d77b97c432f0",
"assets/packages/map_launcher/assets/icons/mappls.svg": "1a75722e15a1700115955325fe34502b",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/sygicTruck.svg": "242728853b652fa765de8fba7ecd250f",
"assets/packages/map_launcher/assets/icons/naver.svg": "ef3ef5881d4a2beb187dfc87e23b6133",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/copilot.svg": "b412a5f02e8cef01cdb684b03834cc03",
"assets/packages/map_launcher/assets/icons/truckmeister.svg": "416d2d7d2be53cd772bc59b910082a5b",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/tmap.svg": "50c98b143eb16f802a756294ed04b200",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/tomtomgofleet.svg": "5b12dcb09ec0a67934e6586da67a0149",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/mapyCz.svg": "f5a198b01f222b1201e826495661008c",
"assets/packages/map_launcher/assets/icons/kakao.svg": "1c7c75914d64033825ffc0ff2bdbbb58",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/flitsmeister.svg": "44ba265e6077dd5bf98668dc2b8baec1",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d2584e1b533868d98c0d963286a6313a",
"assets/fonts/MaterialIcons-Regular.otf": "70858bfb5038b0100a2685ad99e17e4c",
"assets/assets/images/graymap.svg": "36748f4ae7e50737365faab7f82311e9",
"assets/assets/images/watermark.png": "08ce523722a1f0a39dd7e516eabc4c46",
"assets/assets/images/business_service_provider.svg": "eaf1df06e01cd0fd483bc3882403fbad",
"assets/assets/images/mother.svg": "dd2331dbc91cfe23d7dd3a695f26eb37",
"assets/assets/images/logo_title.svg": "aafac5a3dd5f2208c4f211f81c9a42c0",
"assets/assets/images/welcome_vertical.png": "d340199c2c1cfc5608b7f2bb4abbf6ec",
"assets/assets/images/business_vertical.png": "ac486d350a63aa6383a7638bba7ad4f2",
"assets/assets/images/homescreen_showcase_ltr.svg": "892206201ddeaa06f6ff7dc0ac7f902c",
"assets/assets/images/not_alone_text_en.svg": "d0c269e0e95514b1e9e5a00e853de022",
"assets/assets/images/allowLocation_ar.svg": "ae22fd70d2de9b0e6f6cdcb78b55016c",
"assets/assets/images/pregnant_mother.svg": "1441504b1687828bcfb033ee42254a2e",
"assets/assets/images/blank.png": "ebdeac6cb5c5e658f02a51d475177ee4",
"assets/assets/images/title.svg": "566f11653808def63b4107bc379b0e5e",
"assets/assets/images/phone_preview.png": "dd34a38e82417690c9a5226a1c772a6e",
"assets/assets/images/business_complete.png": "bc15548b203ed030234d1ae0fd4e38e4",
"assets/assets/images/logo_title.png": "568ec7dd93a44e6c964e639cc854566b",
"assets/assets/images/angel_right.svg": "8a4c25276d48cc60048425834d8b2603",
"assets/assets/images/map_pins_scatter.svg": "1f01329c3f2a6b2f2537bf89c05bd1e2",
"assets/assets/images/business_service_provider.png": "1c386a4205ce68e14160865cd5d4d69f",
"assets/assets/images/ios_settings_languagepicker_en.png": "540d8bd73dc3fbdd78a49668c99a34d5",
"assets/assets/images/allowLocation_en.svg": "7cd43ae60a1c9326ece1f45bf49c8e2e",
"assets/assets/images/not_alone_text_ar.svg": "ce3c1fa9a2c761827e865730d3bcbf4c",
"assets/assets/images/pregnant.svg": "163d111bca0c2062aaa956e617ec4574",
"assets/assets/images/discount_placeholder.svg": "e9245b28d9ae9e781b3d9064f79ed256",
"assets/assets/images/copy.svg": "0045369da04aa3a19879106b9a5739d5",
"assets/assets/images/test.png": "be67cadd2ae6984e47d64edf3916744f",
"assets/assets/images/ios_settings_languagepicker_he.png": "baf8b9e533694fcea902e8a837028881",
"assets/assets/images/allowLocation_he.svg": "23c471729f4e18699c0fc5bd35fc37c1",
"assets/assets/images/not_alone.png": "49e8673849101a8d3f245f04929c0dc1",
"assets/assets/images/homescreen_showcase_rtl.svg": "3de3296c8ebe395c24f93b9cdac3f657",
"assets/assets/images/business_activity.svg": "a40b826774edd0c91ab12ccc6d55b27d",
"assets/assets/images/business.png": "eeb089959f76d619c1e93e461f8ec3fa",
"assets/assets/images/appicon.jpg": "767131d3c506b654cc92898eaac4413d",
"assets/assets/images/welcome_text_he.png": "2aeebeabb788b2914caef537e37539d3",
"assets/assets/images/business_registration_complete_vertical.png": "4d98a76c8af3aac7c893dfc321a43988",
"assets/assets/images/registration_complete.png": "0039a4544bcfc85223f53f4d3924fbc6",
"assets/assets/images/contact_us.png": "aa04473e5f2c32c7aa0f643ac9d05efe",
"assets/assets/images/not_alone_text_he.svg": "abe112011d169f9d7467ab0bcb8bfc74",
"assets/assets/images/business_activity.png": "b5dd760263bbc739a6578d051012cada",
"assets/assets/images/parent_registration_complete_vertical.png": "bcf0ea3c43034c4698b18e820715545a",
"assets/assets/images/logo.svg": "58d2554e0405f23375dc6e24c36f1d8d",
"assets/assets/images/business_profile_placeholder.svg": "4902ae416c426f9f3e92872669488415",
"assets/assets/images/profile_placeholder.svg": "532f8cb81fa7c024536b7be2c953b308",
"assets/assets/images/website_qr.svg": "8228460ec9e89d7e08c2dd4a2d291b65",
"assets/assets/images/welcome.png": "43b5eb028c401b7ac34d832adba47684",
"assets/assets/images/discount_placeholder.png": "91a3f017495adb1412f04ab6a1565ab0",
"assets/assets/images/placeholder.svg": "fa4eb2dd4a94613f0cff97777bdbbed0",
"assets/assets/lotties/checkmark.json": "55ccddad459bcb93e7d84add3a77f91d",
"assets/assets/gifs/account_ready.gif": "6602057b6d8d558744d98bffa9ba15be",
"assets/assets/icons/person_heart.svg": "fe5dc6e98d3930be0c714909963bb4aa",
"assets/assets/icons/like.svg": "5ac64bb9204a10390772da637e386a54",
"assets/assets/icons/hamburger_square.svg": "209ddf7998c0af2b40b982e4b4a2ff61",
"assets/assets/icons/face_laugh.svg": "aaf2a8a8c72830e38a2b976532033f53",
"assets/assets/icons/list.svg": "2f69021915f167a35d9d8c175338ee33",
"assets/assets/icons/megaphone.svg": "2e2f2f3f3815dafa3c5ed8cfbc77ab0f",
"assets/assets/icons/house.svg": "99c01c8a778087581c90b5bb28370282",
"assets/assets/icons/ios_plus_app.svg": "590ed5f418fd6c1006e32b438948bd9b",
"assets/assets/icons/person_minus.svg": "b531c2d480d6cf29df30281d6dd80575",
"assets/assets/icons/share_ios.svg": "112219d480e9a71ca4464f722bb332f8",
"assets/assets/icons/precent_seal.svg": "e173fb4c3299284db01e78900e4c0d20",
"assets/assets/icons/mother.svg": "5011297b5e972f09ce8248d7d9796291",
"assets/assets/icons/checkmark_green.svg": "6579907049317d82300852e6e04d5973",
"assets/assets/icons/person.svg": "cafef87fab6a43c52208f7fe8e34d3aa",
"assets/assets/icons/shop.svg": "c2a146c1a994d124b2ef47a647b67221",
"assets/assets/icons/clock_fill.svg": "f2c3101f4d677a4957664ad3bf8fcea8",
"assets/assets/icons/shopping_bag.svg": "cf866d31b4f4f0be90e9fccda319143d",
"assets/assets/icons/house_pin.svg": "41defc88d05e1ede5e05453f3b710eff",
"assets/assets/icons/chevron_right_2.svg": "721c8e0fa93be5cb1872bb25e0117ee2",
"assets/assets/icons/briefcase.svg": "b6f4d8f33b41ac6182bfcc8f9a9e0bdc",
"assets/assets/icons/map.svg": "416a60d583ccdb2001dbef50d8a84796",
"assets/assets/icons/male.svg": "6fbca36b2affef15c2e432a45fd7aa16",
"assets/assets/icons/person_clock.svg": "885d3000e8fee0b2039db1fd4c29d25e",
"assets/assets/icons/doc_on_doc.svg": "7ed9eb9d258481536a07b8a3cf776639",
"assets/assets/icons/business_activity_placeholder.svg": "b16ee6632765099fa9425f5dc4e5eae7",
"assets/assets/icons/business_service_placeholder.svg": "4d3b53dc2632e49bccc46e97f190bfe0",
"assets/assets/icons/back_transparent.svg": "d815328f4baec25040652b6d4908ca0c",
"assets/assets/icons/link.svg": "6c85ec6965852ba14b39c7659974011b",
"assets/assets/icons/apple_maps.png": "2435e1416e3d12542fda2e686e0ff98f",
"assets/assets/icons/face_frown.svg": "1e3aaa2121e0a4fd6d45b53d70d86fd3",
"assets/assets/icons/phone_arrow_in.svg": "01595a8b4c7dfa6b9470fdd8f260733b",
"assets/assets/icons/cart.svg": "84c6e96374fc370f4c3942919d3af7d2",
"assets/assets/icons/envelope.svg": "2dbcba157ea61c5de65bff59866f1424",
"assets/assets/icons/share_android.svg": "2ecad330291e3f60053e14388493647e",
"assets/assets/icons/face_sad.svg": "68c0090ce8b890056e4cbfe4fc3ce20a",
"assets/assets/icons/archive.svg": "5aba936d69928dd8b40486f77605cfae",
"assets/assets/icons/face_meh.svg": "0042a394173fa8d53967f13a522a1459",
"assets/assets/icons/heart_2.svg": "f67ee0ff430e2fe9e2704b34ec26fe01",
"assets/assets/icons/light_bulb.svg": "8084032b55f61f652e4f3ffc0508fa0a",
"assets/assets/icons/bread_slice.svg": "290f21dfc5ffde4dbd3b3c9e8f31a089",
"assets/assets/icons/person_xmark.svg": "563d1b1f89540acb5904701eaafa590d",
"assets/assets/icons/square_on_square.svg": "283c1395fbf529e60dfff62477e7f0cf",
"assets/assets/icons/add_with_transparent_plus.svg": "4fd4ae37bcdb8536949ccfb4253eda2a",
"assets/assets/icons/book.svg": "2ff2d66cc26eeb04b3ffe2ebd7a48e8e",
"assets/assets/icons/bell.svg": "5bb61b385850a9439d9ad9e564d80bbb",
"assets/assets/icons/phone_slash.svg": "5ea1c951ed5a4a6b0bbc188aa59acd0c",
"assets/assets/icons/face_smile_wink.svg": "65e108606ed972253cd13825aad09b23",
"assets/assets/icons/plus.svg": "ae66dba2b55e74299b1552902aacb69f",
"assets/assets/icons/document.svg": "91819eeba58c7c67f65d4d82ac3357ac",
"assets/assets/icons/chevronRight.svg": "fdbd325aab670b2c1ad6a5df1cef8bfc",
"assets/assets/icons/business_open.svg": "f464f5ba29d93be68e2b503d7c868874",
"assets/assets/icons/map_pin_clock.svg": "19b7a4767658965595e8b8d186d1826e",
"assets/assets/icons/socialmedia_instagram.svg": "4cea8a3cc22a58203b3fa5940f3310ff",
"assets/assets/icons/gear.svg": "c349fb8004365b662430f0cdc86cfb85",
"assets/assets/icons/search_fill.svg": "4d5294f7b1ffc80f4434ec130a0b3957",
"assets/assets/icons/check_circle.svg": "f464f5ba29d93be68e2b503d7c868874",
"assets/assets/icons/dislike_fill.svg": "89c43a8a6f630fa101f6f37901318f96",
"assets/assets/icons/business_closed.svg": "5b59fa47cd9f6de51fa53b76b6705c5b",
"assets/assets/icons/cart_plus.svg": "7bf4bc97c167e48932bae9d48744eafb",
"assets/assets/icons/child.svg": "6ea1b85c537f4e97ee68ee9b27e96c00",
"assets/assets/icons/female_male.svg": "ffa9b0bb1fd7d20277cabf5930dd7802",
"assets/assets/icons/save.svg": "6a0233dd33347b7b433c7729fbe66fa4",
"assets/assets/icons/backicon.svg": "9189ae1e2836873d660d19b918c99c30",
"assets/assets/icons/person_plus.svg": "453074983af3eb9e8eb233ee8fc62315",
"assets/assets/icons/phone_arrow_out.svg": "44260a71a64a869f46fca1256fac196a",
"assets/assets/icons/back.svg": "829f9e6a8e8df0895e50829a1593d975",
"assets/assets/icons/box.svg": "dfd34f64b112c8284c709f3725cf9316",
"assets/assets/icons/picture.svg": "63db24dd6aa130b0fc672288e3d5d696",
"assets/assets/icons/shop_circle.svg": "dee9f23d8de7d910d7f211b2f7f4a20d",
"assets/assets/icons/baby.svg": "51ff47e13a1149ddcea04da7a7112147",
"assets/assets/icons/camera.svg": "6107028c376315f9805094df0e9fe8cd",
"assets/assets/icons/whatsapp.svg": "21ff37c86d4b93fead3cb3b50a29a297",
"assets/assets/icons/cart_checkmark.svg": "5bd685f586386e1525e6092b769ba156",
"assets/assets/icons/xmark.svg": "897b833527898e232ed6461006d8fa17",
"assets/assets/icons/socialmedia_tiktok.svg": "328694a371a2ea4b00ca95f214fdf05a",
"assets/assets/icons/xmark_circle.svg": "bbd22adff58ddcbe1ff3b6ef35dc43ce",
"assets/assets/icons/phone_xmark.svg": "87a1f25bc33634f37cd18ff3c090f84c",
"assets/assets/icons/star.svg": "97c9a280bd1ec248132e51e5e25a7c50",
"assets/assets/icons/plus_circle.svg": "538b9e53021fe84d852e655cab685ae6",
"assets/assets/icons/shopping_bag_plus.svg": "37a6d516e81f9616c8f40a800e3fc96a",
"assets/assets/icons/map_pin.svg": "bc5f6fc1008b78be75deb44f91080a04",
"assets/assets/icons/business_circle.svg": "1e3cb7751ddec8c2347af044df8558a0",
"assets/assets/icons/speechbubble_on_speechbubble.svg": "b31bb263d8b20bccaf313e54b7d14c4b",
"assets/assets/icons/face_smile.svg": "81f76146ca37511d4627e991f49792bd",
"assets/assets/icons/woman.svg": "35f2b379cd47439a24d62958a59bf6e7",
"assets/assets/icons/trash_fill.svg": "afd94f73053b5d0b092e6145f852975a",
"assets/assets/icons/signout.svg": "372509b3c674a095aa35f89a05c23d45",
"assets/assets/icons/slider_horizontal_3.svg": "f5286a8ba612451b59b4f4bc0eda4d29",
"assets/assets/icons/phone.svg": "6f2ffd9d3231c8e2ef8413bf73d95c00",
"assets/assets/icons/house_pin_large.svg": "ccd7ab53f49f687c8c634f2577d3a49a",
"assets/assets/icons/phone_waves.svg": "e620f0c529c5e2adc7aea8730fc4d86e",
"assets/assets/icons/gift.svg": "811aab2b7a36e7ef2354c71db4a28a7f",
"assets/assets/icons/google_maps.png": "c1cd0fd1f373c3d0f814fac812afaf7a",
"assets/assets/icons/share.svg": "9c76709a8ada4e243515ff91e7a34ea2",
"assets/assets/icons/phone_clock.svg": "099c35cb640b4c47a6d886a913f24244",
"assets/assets/icons/like_fill.svg": "477685677a79f57362c5ae5f06d7d886",
"assets/assets/icons/profile_placeholder_mini.svg": "ff37a3f218c67a64a4b4a2e51943ef37",
"assets/assets/icons/phone_missed_call.svg": "efb1dc6db7724de3876963093b0b4473",
"assets/assets/icons/comment.svg": "5bb0895943a93918027fa543cc796865",
"assets/assets/icons/calendar.svg": "e8c4c9fd60fe8f93d0a37ec7d3c5bd91",
"assets/assets/icons/globe.svg": "e42e4d7ddebba5ddcc0ddece842b4845",
"assets/assets/icons/paper_pencil.svg": "f9cabad073796176152e3d02fb85d932",
"assets/assets/icons/socialmedia_facebook.svg": "dd130e895df2ef022965f4f16e7893c2",
"assets/assets/icons/star_fill.svg": "e5cb3d42be18e5d99ca819031c5a9fac",
"assets/assets/icons/lightbulb_light.svg": "dcee3567f5254470581aead98397cb0c",
"assets/assets/icons/male_male.svg": "bb1ae69270e208d224e2591c241c3460",
"assets/assets/icons/moovit.svg": "00382e8c1abf3f5b623425a764cea7dd",
"assets/assets/icons/phone_pause.svg": "2a255d8046a2f5d7bb892f53ab50a5bd",
"assets/assets/icons/female.svg": "084a12f716cbadf84ffd76ba9b5eae47",
"assets/assets/icons/waze.svg": "7f7aa9db7ba551c9ff4bd32d91c0e4d4",
"assets/assets/icons/shield-check.svg": "487f81cc4861592029aacf9122b21060",
"assets/assets/icons/man.svg": "84ce0532425fa5e3cff74f0f9f773b6d",
"assets/assets/icons/remove_with_transparent_minus.svg": "4d5628c86971c019225d0dcd71b40394",
"assets/assets/icons/female_female.svg": "244f038355644fb345d8a77ba963151e",
"assets/assets/icons/exclamation.svg": "2d58fa973f969b255fecf52b890cc78e",
"assets/assets/icons/heart.svg": "0875280eed55f2f67a8856d02ebddf8d",
"assets/assets/icons/search_tint.svg": "e86493c07a0276e1ed3a66f48b304d99",
"assets/assets/fonts/VarelaRound-Regular.ttf": "3c3c18c24b0bd85a303bc3f2581d53fc",
"assets/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf": "78609089d3dad36318ae0190321e6f3e",
"sw.js": "918cc8882d1e1ee7b1e2d51501f62020",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
