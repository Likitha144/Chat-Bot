var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Ms. Smiley","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select category"],
        options:['Hollywood','Bollywood','Tollywood','Web Series','Others'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:['Hindustan times','Times of india','NDTV','India Today'],
        url : {
            more:"https://economictimes.indiatimes.com/news/politics-and-nation/four-news-channels-off-air-in-andhra-pradesh-post-polls-ysrcp-reaches-out-to-trai/articleshow/111206070.cms?from=mdr",
            link:["https://www.hindustantimes.com/","https://timesofindia.indiatimes.com/news","https://www.ndtv.com/india-news/mamata-banerjee-says-willing-to-resign-amid-stand-off-with-doctors-6550373","https://www.indiatoday.in/"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {

        }
    },
    televisions: {
        title:["Here are some television items for you from the top brands","Click on it to know more"],
        options:['Amazon','Flipkart','Reliance digital','Croma','Onida'],
        url : {
            
            link:["https://www.amazon.in/l/1389396031","https://www.flipkart.com/television-store","https://www.reliancedigital.in/televisions/c/S101812?srsltid=AfmBOoomJpiZP0AQv4yspjfTt-eYrxgUBDDoSjWiEk6ptA5ikT1dVhoo","https://www.croma.com/televisions-accessories/c/997?q=%3Arelevance&srsltid=AfmBOooaYfp_nBeycCiiLwprxeo9WkMcztEqh2iA1gkWRNpjr5AAKSbZ","https://www.onida.com/television"]
        }
    },
    cameras: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Amazon','Flipkart','Canon','Reliance digital','Croma'],
        url : {
            
            link:["https://www.amazon.in/b/?_encoding=UTF8&node=1388977031&ref_=sv_top_elec_mega_5&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522","https://www.flipkart.com/camera-clp-store","https://www.justcanon.in/collections/digital-camera?srsltid=AfmBOorXZ1EmaeOetXBOqyb-QzgDsq_eheWgd3j6GOg8fvePGz3NgT-j","https://www.reliancedigital.in/dslr-cameras/c/S101110?srsltid=AfmBOord5BJTcvF5PpFlmXGTL3_EpMouj9SU3Drgoyc6zUQTC3IsZLWT","https://www.croma.com/cameras-accessories/c/2?srsltid=AfmBOorDKsitHpXNGieJqm2FwWDiKywmX8coZTao9YAakN4pOCwarEmw"]
        }
    },
    gaming: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Amazon','Flipkart','Happy gaming world','Game Nation','Dacby'],
        url : {
            
            link:["https://www.amazon.in/Gaming-Consoles/b?ie=UTF8&node=4092115031","https://www.flipkart.com/gaming-consoles/pr?sid=4rr,x1m","https://hgworld.in/product-category/gaming-consoles/?srsltid=AfmBOoqlMSmV7lgSBhcJaKQpgdNR6O7Z-T4zlpFhdwi2RkjHlLPSap1b","https://gamenation.in/Consoles/","https://dacby.com/product-search?q=consoles"]
        }
    },
    headphones: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Amazon','Flipkart','Headphone Zone','Reliance digital'],
        url : {
            
            link:["https://www.amazon.in/b/?_encoding=UTF8&node=1389335031&ref_=sv_top_elec_mega_4","https://www.flipkart.com/headphones-store","https://www.headphonezone.in/?srsltid=AfmBOorglq_aKNkX3VYt0A88pjNz1lbr31OmGjk1SDzB3xaxQ5MsLhbs","https://www.reliancedigital.in/headphones-headsets/c/S101021"]
        }
    },
    speakers: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Amazon','Flipkart','Gaming Consoles','Harmanaudio','Jbl'],
        url : {
            
            link:["https://www.amazon.in/s/ref=mega_elec_s23_4_1_2_1?rh=i%3Aelectronics%2Cn%3A1389365031&ie=UTF8&bbn=976419031","https://www.flipkart.com/audio-video/speakers/pr?sid=0pm,0o7","https://www.harmanaudio.in/speakers","https://in.jbl.com/speakers"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make up','Skin Care','Fragrance','Hair care'],
        url : {

        }
    },
    make: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Nykaa','Myglamm','Purplle','Pilgrim','Flipkart'],
        url : {
            
            link:["https://www.nykaa.com/sp/makeup-sale-page/makeup-sale","https://www.myglamm.com/buy/makeup","https://www.purplle.com/","https://discoverpilgrim.com/pages/makeup-homepage","https://www.flipkart.com/search?q=makeup&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_8_4_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_8_4_na_na_na&as-pos=8&as-type=RECENT&suggestionId=makeup&requestId=f93d71ad-2bc8-4f96-87c5-4b1c7d5397c9&as-searchtext=make"]
        }
    },
    skin: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Nykaa','Sephora','Mamaearth','Purplle','Myglamm',''],
        url : {
            more:"https://www.amazon.in/Skin-Care/b?ie=UTF8&node=1374407031",
            link:["https://www.nykaa.com/sp/skin-sale-page/skincare-sale","https://sephora.in/collection/skincare?srsltid=AfmBOoo8eIvFsJ1klgQ-7BRAjNDPWR0ISP36bGS4JrSmLtWDs-22iSMB","https://mamaearth.in/product-category/skin?srsltid=AfmBOoqMUU3i_g3kLFK1YhsBYsOWcjoSU4jIbyTBboT7IuW3h-wLQmp3","https://www.purplle.com/skin","https://www.myglamm.com/buy/skincare"]
        }
    },
    fragrance: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Pacros','ISAK','House of Em 5','Nykaa','Amazon'],
        url : {
            
            link:["https://www.parcos.com/cat/fragrance?srsltid=AfmBOoqxn9V_vnhlJuqQB5XL8RsJ7wtQgKMHKnib15E4xImxd6vWRFFL","https://isakfragrances.com/?srsltid=AfmBOop114ciUKilRNYUDRRG1Id904aBO_lgFhr_w-q5HedtS5xKKYUM","https://www.houseofem5.com/?srsltid=AfmBOooyY0yqn8h53PA8txwuk-dPvSjxc-qdhFLbSbI2fh_OMntM4eC8","https://www.nykaa.com/luxe/fragrance/c/2880?ptype=lst&id=2880&root=nav_2&dir=desc&order=popularity","https://www.amazon.in/s?k=perfumes&crid=U3PLXVWABTO&sprefix=perfumes%2Caps%2C323&ref=nb_sb_noss_2"]
        }
    },
    hair: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Nykaa','Mamaearth','Pilgrim','Amazon'],
        url : {
            
            link:["https://www.nykaa.com/sp/hair-sale-page/hair-sale","https://mamaearth.in/product-category/hair","https://discoverpilgrim.com/collections/hair-care","https://www.amazon.in/b?node=9851597031"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            
            link:[""]
        }
    },
    phones: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Amazon','Flipkart','Reliance digital','Croma'],
        url : {
            
            link:["https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles","https://www.flipkart.com/mobile-phones-store","https://www.reliancedigital.in/smartphones/c/S101711","https://www.croma.com/phones-wearables/mobile-phones/c/10?srsltid=AfmBOopt3NCs4HYfjNyX8Lb1uDfFd1zQqpwtr56Tp2z795y1iKQhG_lz"]
        }
    },
    cases: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Zapvi','Myntra','Amazon'],
        url : {
            
            link:["https://zapvi.in/mobile-cover/","https://www.myntra.com/mobile-phone-cases","https://www.amazon.in/phone-case/s?k=phone+case"]
        }
    },
    power: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Amazon','Boat','Flipkart','Reliance digital'],
        url : {
            
            link:["https://www.amazon.in/s?k=powerbank%27&adgrpid=61806919434&ext_vrnc=hi&hvadid=398031299442&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=12188311123036952866&hvtargid=kwd-315301124118&hydadcr=26762_2177643&tag=googinhydr1-21&ref=pd_sl_5ga7ww7n21_e","https://www.boat-lifestyle.com/collections/power-banks?srsltid=AfmBOoqxi1ziiX9Vjd6Do20EtcUN2GCOHZsCM1csCl5WHmfGHakswspq","https://www.flipkart.com/mobile-accessories/power-banks/pr?sid=tyy,4mr,fu6","https://www.reliancedigital.in/power-banks/c/S101716?srsltid=AfmBOoqxItMdOSkOed9jmtuSVyDy4l4Z0lMSxaslrPE9LlPDSB3sM3yG"]
        }
    },
    tablets: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Amazon','Flipkart','Croma','Reliance digital'],
        url : {
            
            link:["https://www.amazon.in/s?k=tablet%27&adgrpid=59255805272&ext_vrnc=hi&hvadid=398046512788&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=10589652805943698558&hvtargid=kwd-439267418329&hydadcr=27070_1985259&tag=googinhydr1-21&ref=pd_sl_4tmqg6b7td_e","https://www.flipkart.com/tablets/pr?sid=tyy,hry","https://www.croma.com/computers-tablets/tablets-ereaders/c/22?srsltid=AfmBOop2azXsleldESGuI2B4se_GPmEdQP8U0EaKM9WVk2uOSBZnlhhs","https://www.reliancedigital.in/tablets/c/S101712?srsltid=AfmBOooBytUL5fzWoDFQ3n_7CMSCdI9jM3quyzSKKhWbewckBRFA_2cp"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Shirts','T-shirts','shoes','Jeans','Watches'],
        url : {

        }
    },
    shirts: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Amazon','Myntra','Ajio','Thesouledstore','Snitch'],
        url : {
            
            link:["https://www.amazon.in/s?k=shirts+for+men&adgrpid=58754584237&ext_vrnc=hi&hvadid=356458090466&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=1469108227075722071&hvtargid=kwd-49536962&hydadcr=7489_1931467&tag=googinhydr1-21&ref=pd_sl_3r8lkgd57l_e","https://www.myntra.com/men-casual-shirts","https://www.ajio.com/men-shirts/c/830216013?srsltid=AfmBOoq6-1Z_Tg_x3jlBhtbwkkkL3_ZMEaBRD6Z7lgc2adQ7zqHU1oEw","https://www.thesouledstore.com/men/shirts","https://www.snitch.co.in/collections/shirts?page=2"]
        }
    },
    tshirts: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Thesouledstore','jackjones','Myntra','Ajio','Snitch'],
        url : {
            
            link:["https://www.thesouledstore.com/men/t-shirts","https://www.jackjones.in/t-shirts-jj?srsltid=AfmBOorJ-11DEsBM4Wl6quvtAHxvO3r8jXb_iWG553NI4kPXgcuwjy_P","https://www.myntra.com/men-tshirts","https://www.ajio.com/men-tshirts/c/830216014?srsltid=AfmBOopw_7XA5YCBjgbAgIOD5_nC1Op9a1tES1LumdiMcjszuEZFnxC_","https://www.snitch.co.in/collections/t-shirts"]
        }
    },
    shoes: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Myntra','Campus shoes','Adidas','Ajio'],
        url : {
            
            link:["https://www.myntra.com/men-footwear","https://www.campusshoes.com/collections/mens-footwear?srsltid=AfmBOooORuFskW1fy7YOpF7Nh8eLl94AxcxCZ5U-N530zzaJzWxZBPAf&usf_sort=-date","https://www.adidas.co.in/men-shoes","https://www.ajio.com/men-footwear/c/830207?srsltid=AfmBOopxEZ-QgcHkdamFNnmMp5iPsXA7Lutv1N_OhL6Q1ObydHx19FIc"]
        }
    },
    jeans: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Myntra','Levis','Ajio','jackjones','Flipkart'],
        url : {
            
            link:["https://www.myntra.com/men-jeans","https://levi.in/collections/men-jeans?filter.v.price.gte=&filter.v.price.lte=&filter.v.availability=1&sort_by=0","https://www.ajio.com/men-jeans/c/830216001?srsltid=AfmBOop-Q_nQ2UGWGD47aff3QT7wBCds6rXvt9lgTMyM1hjBZy_L7oF-","https://www.jackjones.in/jeans-jj?srsltid=AfmBOoqq1pMbJPXKhkih8p0Kd-UMxndhcPwvYQ7Ji8OxJcU7YY7GMUK7","https://www.flipkart.com/mens-jeans/pr?sid=clo,vua,k58,i51"]
        }
    },
    watches: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Amazon','Titan','Fossil','Myntra','Tata CLiQ'],
        url : {
            
            link:["https://www.amazon.in/s?k=men%27+watches&adgrpid=61575967880&ext_vrnc=hi&hvadid=379954188840&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=4896942675461873894&hvtargid=kwd-362240045647&hydadcr=20548_1939259&tag=googinhydr1-21&ref=pd_sl_9piqozn3r4_e","https://www.titan.co.in/shop/watches-for-men?srsltid=AfmBOorSZ2JyqPQ5D9cvqtxg4-rwOjOtJDVIEde43-3My3qJVYtbFeMT","https://www.fossil.com/en-in/watches/mens-watches/","https://www.myntra.com/mens-watches","https://www.tatacliq.com/watches-men/c-msh1500"]
        }
    },
    women:{
        title:["Thanks for your response","These are some results based on your input","Click on it to known more"],
        options:['Westren wear','Ethnic wear','Foot wear','Watches','jeans and jeggings','Sun glasses','Hand bags'],
        url :{

        }
    },
    westren:{
        title:["Thanks for your response","These are some results based on your input","Click on it to known more"],
        options:['Myntra','Ajio','Flipkart','Amazon','Meesho'],
        url :{
            
            link:["https://www.myntra.com/dresses?f=Gender%3Amen%20women%2Cwomen","https://www.ajio.com/women-western-wear/c/830316?srsltid=AfmBOoqu7gcqNQ-fPGC6l2eRtV41EAXHqxxldrfVoddYsA7qJD524zeU","https://www.flipkart.com/q/western-tops","https://www.amazon.in/Womens-Tops-In-Western-Style/s?k=Women%27s+Tops+In+Western+Style","https://www.meesho.com/tops-ladies/pl/3ja"]
        }
    },
    ethnic:{
        title:["Thanks for your response","These are some results based on your input","Click on it to known more"],
        options:['Amazon','indya','Myntra','Libas','Ajio'],
        url :{
            
            link:["https://www.amazon.in/s?k=ethnic+women%27s+dresses&adgrpid=165138564202&gad_source=1&hvadid=702365069259&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=17462578848410296455&hvtargid=kwd-345903057323&hydadcr=15479_2267051&tag=googinhydr1-21&ref=pd_sl_6ohb045pwt_e","https://www.houseofindya.com/women-ethnic-wear/cat","https://www.myntra.com/women-ethnic-wear","https://www.libas.in/collections/ethnic-wear?srsltid=AfmBOop40KcQRgDN2t4HsXK1h7IxatGeVHlntMtH5FXmjl0mwbIpsFq2","https://www.ajio.com/women-ethnic-wear/c/830303?srsltid=AfmBOoqVXgqsFWCGF12wTrc1XdmQLYv0Sn-N95Ft2UxTino4HvvQJX9G"]
        }
    },
    foot:{
        title:["Thanks for your response","These are some results based on your input","Click on it to known more"],
        options:['Amazon','Myntra','Ajio','Max Fashion','Flipkart','Meesho'],
        url :{
            
            link:["https://www.amazon.in/s?k=foot+wear+for+women&adgrpid=58341619629&ext_vrnc=hi&hvadid=397754714592&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=13459895549786449619&hvtargid=kwd-426071581&hydadcr=22289_1978667&tag=googinhydr1-21&ref=pd_sl_13fegh600p_e","https://www.myntra.com/women-footwear","https://www.ajio.com/women-footwear/c/830307?srsltid=AfmBOor-QcYoPBvLDmswBfLJf1K_Q8rd2PLEasUexCpfzaM4UBUHcnqf","https://www.maxfashion.in/in/en/c/maxwomen-shoes","https://www.flipkart.com/womens-footwear/pr?sid=osp,iko","https://www.meesho.com/women-footwear/pl/460?srsltid=AfmBOoraVXCusfak_KspN5-cWLkzt2lqFlK13bSLR9ph-DdyRChqAkbb"]
        }
    },
    watches:{
        title:["Thanks for your response","These are some results based on your input","Click on it to known more"],
        options:['Amazon','Titan','Helios','Sonata','Myntra','Flipkart'],
        url :{
            
            link:["https://www.amazon.in/s?k=watches+for+women%27&adgrpid=57383047845&ext_vrnc=hi&hvadid=379961261956&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=1079676431316091277&hvtargid=kwd-386411263113&hydadcr=29959_1975206&tag=googinhydr1-21&ref=pd_sl_7jynyivpuy_e","https://www.titan.co.in/shop/watches-for-women?srsltid=AfmBOor0j3yDOGWjSO80RHR314CEJGc_CQHnQYXcnWYVggqQfhctfZi2","https://www.helioswatchstore.com/womens-watches","https://www.sonatawatches.in/shop/womens-watches","https://www.myntra.com/women-watches","https://www.flipkart.com/womens-watches-store"]
        }
    },
    jeans:{
        title:["Thanks for your response","These are some results based on your input","Click on it to known more"],
        options:['Amazon','Myntra','Gocolors','Ajio','Flipkart','Twin birds'],
        url :{
            
            link:["https://www.amazon.in/s?k=jeans+and+jeggings+for+women&adgrpid=59259344096&ext_vrnc=hi&hvadid=590341681332&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=13967392448492085723&hvtargid=kwd-414631696013&hydadcr=23654_2208516&tag=googinhydr1-21&ref=pd_sl_73tz8utmls_e","https://www.myntra.com/jeggings","https://gocolors.com/collections/jeans-jeggings-women?srsltid=AfmBOopJPfE5bqBmscJzQBClmvkM_gwKSzhkb5_alXuEjPDjs5qtH-AI","https://www.ajio.com/women-jeans-jeggings/c/830316001?srsltid=AfmBOoroPb_obdWbjVfERU9bf9Hqu7Cf7e4-n25wHdVnGDeVL6SuLKs2","https://www.flipkart.com/q/jeggings","https://twinbirds.co.in/collections/denim-jegging?srsltid=AfmBOor2Cc5D1BiqkU4HkCZfQUwS1sGCtXZxLiE17pyyONEKPUniDAWE"]
        }
    },
    sun:{
        title:["Thanks for your response","These are some results based on your input","Click on it to known more"],
        options:['Amazon','Myntra','Sunglass hut','Lenskart','Raymond'],
        url :{
            
            link:["https://www.amazon.in/s?k=sunglasses+for+women&adgrpid=67409128068&ext_vrnc=hi&hvadid=294132593942&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=14510243790047498368&hvtargid=kwd-29246131&hydadcr=25593_1900876&tag=googinhydr1-21&ref=pd_sl_3ritn61roz_e","https://www.myntra.com/women-sunglasses","https://sunglasshut.in/collection/women","https://www.lenskart.com/sunglasses/find-eyewear/womens-sunglasses.html","https://india.ray-ban.com/sunglasses-clp?srsltid=AfmBOor7MjW33dKrABqS2WBKLZTjdcRUQGuWTIpnYhj7ZlvkXn_bZvnD"]
        }
    },
    hand:{
        title:["Thanks for your response","These are some results based on your input","Click on it to known more"],
        options:['Amazon','Myntra','Allen Solly','Flipkart','Meesho'],
        url :{
            
            link:["https://www.amazon.in/s?k=handbags+for+women&adgrpid=61794317267&ext_vrnc=hi&hvadid=380026602233&hvdev=c&hvlocphy=9301520&hvnetw=g&hvqmt=e&hvrand=4211320482371183848&hvtargid=kwd-295762225419&hydadcr=24063_1950209&tag=googinhydr1-21&ref=pd_sl_2a40ntwsfs_e","https://www.myntra.com/handbags","https://allensolly.abfrl.in/c/women-bags","https://www.flipkart.com/bags-wallets-belts/handbags-clutches/pr?sid=reh%2Cihu","https://www.meesho.com/bags-ladies/pl/3jo?srsltid=AfmBOoouUIAOwnKHPQxWqJb5YlH2hL6-KAPkPw-eIeE3QHbY4EE9w5Pg"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["Telugu","Hindi","English","Punjabi","Tamil"],
        url : {
            more:"https://gaana.com/",
            link:["https://music.apple.com/bz/playlist/telugu-hits/pl.1be89625ddd94a80a1dff804b41efd63","https://www.jiosaavn.com/featured-playlists/hindi","https://www.jiosaavn.com/featured/english-india-superhits-top-50/aXoCADwITrUCObrEMJSxEw__","https://gaana.com/playlist/gaana-dj-punjabi-top-50-1","https://www.jiosaavn.com/featured-playlists/tamil"]
        }
    },
    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.mxplayer.in/movie-videos/telugu-movies",
            link:["https://www.imdb.com/list/ls057433882/","https://www.imdb.com/search/title/?title_type=feature&genres=horror","https://www.imdb.com/search/title/?genres=sci-fi","https://www.imdb.com/search/title/?title_type=feature&genres=romance","https://www.imdb.com/search/title/?genres=action&explore=genres&title_type=feature"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.mxplayer.in/movie-videos/telugu-movies",
            link:["https://www.netflix.com/in/browse/genre/6548","https://www.imdb.com/search/title/?genres=horror&languages=hi","https://www.imdb.com/list/ls082080947/","https://www.imdb.com/list/ls000723557/","https://www.imdb.com/list/ls052745924/"]
        }
    },
    tollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.mxplayer.in/movie-videos/telugu-movies",
            link:["https://www.imdb.com/search/title/?genres=comedy&languages=te","https://www.91mobiles.com/entertainment/new-telugu-horror-movies","https://www.imdb.com/search/title/?title_type=feature&genres=sci-fi&languages=te","https://www.imdb.com/search/title/?genres=romance&languages=te","https://www.imdb.com/search/title/?title_type=feature&genres=action&languages=te"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ['Telugu','Hindi','English','Tamil','Chineese','Korean','pakistan'],
        url: {
            more:"https://www.91mobiles.com/entertainment/languages",
            link:["https://www.91mobiles.com/entertainment/best-comedy-web-series","https://www.91mobiles.com/entertainment/best-horror-web-series","https://www.91mobiles.com/entertainment/best-science-fiction-web-series","https://www.movies-da.net/49/catlist/tamil-webseries/default/1.html","https://www.imdb.com/list/ls579743163/","https://www.imdb.com/search/title/?title_type=tv_series&countries=KR","https://www.imdb.com/search/title/?title_type=tv_series&countries=PK"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/results?search_query=telugu+movies","https://www.netflix.com/in/","https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root","https://www.hotstar.com/in/home?ref=%2Fin","#"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url,);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}