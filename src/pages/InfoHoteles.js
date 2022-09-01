import Images from '../components/Info-Hotel/imagesList';
import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FavButton from '../components/Info-Hotel/FavButton';
import Contacts from '../components/Info-Hotel/Contacts';
import Reservar from '../components/Info-Hotel/Reservar';
import Navbar from '../components/Navbar';
import Divider from '@mui/material/Divider';
import Services from '../components/Info-Hotel/Services';
import Mapa from '../components/Info-Hotel/Mapa';
import Stars from '../components/Info-Hotel/Stars';
import Comment from '../components/Info-Hotel/CommentUser';
import Others from '../components/Info-Hotel/CommetsOthersUsers';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getHotelInfo } from '../api';


const exampleHotel = {
    "data": [
      {
        "location_id": "10359481",
        "name": "Penhouse Hotel Pattaya",
        "latitude": "12.91285",
        "longitude": "100.87808",
        "num_reviews": "0",
        "timezone": "Asia/Bangkok",
        "location_string": "Pattaya, Chonburi Province",
        "awards": [],
        "preferred_map_engine": "default",
        "distance": null,
        "distance_string": null,
        "bearing": null,
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$",
        "price": "$27 - $142",
        "hac_offers": {
          "availability": "pending",
          "offers": [
            {
              "content_id": "134152539",
              "provider_display_name": "Travelocity",
              "internal_provider_name": "TravelocityEWS",
              "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
              "treatment": "co_branded",
              "is_bookable": false,
              "availability": "pending",
              "display_style": "text_link",
              "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=134152539&geo=10359481&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=6&silo=11456&bucket=934278&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=224933872&managed=true&capped=false&gosox=Rh72o1GbJsoBTrEiWgTOJwL8T6Kg04DtIBKhXaV2suf5MGkMdlICwxIwcRDtMXRMt_ALYiDSjHU3po-Vpo93f9kfdxPTGlDwlwSMhwLuVZnColLXnuTmMespSjuPGZBvbC1NmaZgT41RzVmCsVo4dKuvogw7YPVpGJmroMQbfCejnMiGFXQX85m8Zc0h9x9x&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=15&outDay=17&rooms=1&inMonth=3&inYear=2022&outMonth=3&outYear=2022&auid=0ad88242-b6f2-425e-9f1a-6c0b9c23bdac&def_d=false&bld=L_2,D_27,G_1,W_2,U_0,C_220315,T_9&bh=true&cs=1073415b17c514a99a9b70a168ea8843e&area=QC_META_API&ik=7d6600f7db6e456c841a02427ea8dee8&drs=mobileapp&drv=77&dated=true&aok=02153f5d518b4fc4947eed26c034614f&tp=HR_MainCommerce",
              "auction_offer_key": "02153f5d518b4fc4947eed26c034614f"
            },
            {
              "content_id": "136825353",
              "provider_display_name": "Orbitz.com",
              "internal_provider_name": "OrbitzEWS",
              "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
              "treatment": "co_branded",
              "is_bookable": false,
              "availability": "pending",
              "display_style": "text_link",
              "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=136825353&geo=10359481&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=6&silo=20728&bucket=934281&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=224933872&managed=true&capped=false&gosox=OscPoYV_0tPQjyMOS8n34F8i9u_3qSPdV4Z9wHezWq6Y5XSqq9lUX_F_8F6FwQxtQchRAkqS7m-w7R7YMEDW5oEp4Ae6JGsgmZ9yOn8Z85hMoS95_WDS72E9e12te9-rz4zST9b_l5ym3mzZi-LozXHyxglfdLCzQATCGi7adcAqCf9o3h3iSbpAgZMk137g&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=15&outDay=17&rooms=1&inMonth=3&inYear=2022&outMonth=3&outYear=2022&auid=0ad88242-b6f2-425e-9f1a-6c0b9c23bdac&def_d=false&bld=L_2,D_27,G_1,W_2,U_0,C_220315,T_9&bh=true&cs=1dc670644aa54be21142a9cfef8d79021&area=QC_META_API&ik=7d6600f7db6e456c841a02427ea8dee8&drs=mobileapp&drv=77&dated=true&aok=4d59c8215a07489ca1fde942b40d16bf&tp=HR_MainCommerce",
              "auction_offer_key": "4d59c8215a07489ca1fde942b40d16bf"
            },
            {
              "content_id": "177070617",
              "provider_display_name": "FindHotel",
              "internal_provider_name": "FindHotel",
              "logo": "https://static.tacdn.com/img2/branding/hotels/FindHotel.png",
              "treatment": "none",
              "is_bookable": false,
              "availability": "pending",
              "display_style": "text_link",
              "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=177070617&geo=10359481&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=6&silo=33308&bucket=894612&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=224933872&managed=false&capped=false&gosox=HdmJAVt640HeB-PjjXjeHD3w1lUGsyRoTlJ9u45ifdmzO-Nk5_sr0qQvJpLuvINZAfnZobTfy98Xy2bfO00BhmHxJvbRKsGz8qqc50sRv1cFgGKzgMoFZCit4jBeEN4YmaIJzOBY7IqmgQuBdktOXIKJReUNv4XBkf6Hhj0s6Eam8T2e_A_rmjl-2OfGQbGwoVSW-dyRaue_WhRya8wlUNW4KCh6L7PeJzzNp9a2Tcgi_qpUdlVSLrD8o_kvO7wL&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=15&outDay=17&rooms=1&inMonth=3&inYear=2022&outMonth=3&outYear=2022&auid=0ad88242-b6f2-425e-9f1a-6c0b9c23bdac&def_d=false&bld=L_2,D_27,G_1,W_2,U_0,C_220315,T_9&bh=true&cs=1f6bcc9799b8b7fec113492572d8a30ec&area=QC_META_API&ik=7d6600f7db6e456c841a02427ea8dee8&drs=mobileapp&drv=77&dated=true&aok=02649980299a4a10b4cf088eed4a9aa4&tp=HR_MainCommerce",
              "auction_offer_key": "02649980299a4a10b4cf088eed4a9aa4"
            },
            {
              "content_id": "143780919",
              "provider_display_name": "StayForLong",
              "internal_provider_name": "StayForLong",
              "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
              "treatment": "none",
              "is_bookable": false,
              "availability": "pending",
              "display_style": "text_hidden",
              "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=143780919&geo=10359481&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=6&silo=40511&bucket=944068&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=224933872&managed=false&capped=false&gosox=vnwZRMEQZo4U_aDbKTIdMT9vl3AdTeIuUlmnmHQdkiast0HNBKaHz-_Wsmz7w8x92I53hCKgQShNXmoCbU1DJDpU3Cyb0kivRa9qSMP-T4fvDVxAQJoSL3uO_UYHG9Q01uafzaecMVhsNE5rTB2ttksyxQk0mYCYxw6plzXMlV7VwPRzVAQ96PihRdtqF8Cy7uCH3CVfG4zZmgZOTZcdGt90-Ho294BhvmcaEvR2ogI&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=15&outDay=17&rooms=1&inMonth=3&inYear=2022&outMonth=3&outYear=2022&auid=0ad88242-b6f2-425e-9f1a-6c0b9c23bdac&def_d=false&bld=L_2,D_27,G_1,W_2,U_0,C_220315,T_9&bh=true&cs=13c85755f61be145a6d719a6e114958af&area=QC_META_API&ik=7d6600f7db6e456c841a02427ea8dee8&drs=mobileapp&drv=77&dated=true&aok=ad77a0aa2af2473db57a7c2a20d6f20e&tp=HR_MainCommerce",
              "auction_offer_key": "ad77a0aa2af2473db57a7c2a20d6f20e"
            },
            {
              "content_id": "218324593",
              "provider_display_name": "Etrip",
              "internal_provider_name": "Etrip",
              "logo": "https://static.tacdn.com/img2/branding/hotels/etrip.png",
              "treatment": "none",
              "is_bookable": false,
              "availability": "pending",
              "display_style": "text_hidden",
              "link": "https://www.tripadvisor.com/Commerce?p=Etrip&src=218324593&geo=10359481&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=6&silo=44763&bucket=973098&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=224933872&managed=false&capped=false&gosox=C95WfuvdrSv_8mIhvgHx_fORJ5MYDwdNPHI19bc7z2YQ7_j82Yv61oOf-RCPWSKx0Hy10_21Pug9u5SXfcGYl-Q2SSf6bnCHLzBjNOJBlzOIxKHKRx_63-UiY_8_cnTWKmK7I70Iv6m_aP582aS-nNBParVPwnuHvIBTzfxly948sHUmqAUZ9NdNQ80CKRlPWwdKhPaSUJs7EjEH311Qfa3GZ3P50haghnhN2N3tAzA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=15&outDay=17&rooms=1&inMonth=3&inYear=2022&outMonth=3&outYear=2022&auid=0ad88242-b6f2-425e-9f1a-6c0b9c23bdac&def_d=false&bld=L_2,D_27,G_1,W_2,U_0,C_220315,T_9&bh=true&cs=14a8fef7a3d1b29f46a6579c3220c4aaf&area=QC_META_API&ik=7d6600f7db6e456c841a02427ea8dee8&drs=mobileapp&drv=77&dated=true&aok=ec9331ec35824e88ab97ff187768212d&tp=HR_MainCommerce",
              "auction_offer_key": "ec9331ec35824e88ab97ff187768212d"
            },
            {
              "content_id": "137101482",
              "provider_display_name": "CheapTickets",
              "internal_provider_name": "CheapTicketsEWS",
              "logo": "https://static.tacdn.com/img2/branding/hotels/ctix_new2.png",
              "treatment": "co_branded",
              "is_bookable": false,
              "availability": "pending",
              "display_style": "text_hidden",
              "link": "https://www.tripadvisor.com/Commerce?p=CheapTicketsEWS&src=137101482&geo=10359481&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=6&silo=20729&bucket=934321&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=224933872&managed=true&capped=false&gosox=mJZMX61hhML-hN6zi4Bub1VeG_E9i3Vdq0OhYZ9sJt3MgUPuk0tDX-QKumr1LIOO7HJgq0iw0lWmdwefBwqWvmqlnEdytcIv0ulquMJglXgoza2PP2n_lf3ZNOH4Bymwz4zST9b_l5ym3mzZi-LozXHyxglfdLCzQATCGi7adcAqCf9o3h3iSbpAgZMk137g&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=15&outDay=17&rooms=1&inMonth=3&inYear=2022&outMonth=3&outYear=2022&auid=0ad88242-b6f2-425e-9f1a-6c0b9c23bdac&def_d=false&bld=L_2,D_27,G_1,W_2,U_0,C_220315,T_9&bh=true&cs=1fee75d807bc31554cacf49477fc03559&area=QC_META_API&ik=7d6600f7db6e456c841a02427ea8dee8&drs=mobileapp&drv=77&dated=true&aok=6ebdce152a2f45658efa19341b76742a&tp=HR_MainCommerce",
              "auction_offer_key": "6ebdce152a2f45658efa19341b76742a"
            }
          ],
          "all_booking_offers": []
        },
        "hotel_class": "2.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
          "desktop_contacts": [],
          "mobile_contacts": []
        },
        "special_offers": {
          "desktop": [],
          "mobile": []
        },
        "listing_key": "ef7ee102-79e3-421c-9380-abfacfe3fe70",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Hotel_Review-g293919-d10359481-Reviews-Penhouse_Hotel_Pattaya-Pattaya_Chonburi_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293919-d10359481-Penhouse_Hotel_Pattaya-Pattaya_Chonburi_Province.html",
        "ancestors": [
          {
            "subcategory": [
              {
                "key": "municipality",
                "name": "Municipality"
              }
            ],
            "name": "Pattaya",
            "abbrv": null,
            "location_id": "293919"
          },
          {
            "subcategory": [
              {
                "key": "province",
                "name": "Province"
              }
            ],
            "name": "Chonburi Province",
            "abbrv": null,
            "location_id": "2098164"
          },
          {
            "subcategory": [
              {
                "key": "country",
                "name": "Country"
              }
            ],
            "name": "Thailand",
            "abbrv": null,
            "location_id": "293915"
          }
        ],
        "category": {
          "key": "hotel",
          "name": "Hotel"
        },
        "subcategory": [
          {
            "key": "bb",
            "name": "Bed and Breakfast"
          }
        ],
        "parent_display_name": "Pattaya",
        "guide_count": "0",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+66 99 569 4997",
        "address_obj": {
          "street1": "147/1 Moo 11",
          "street2": "Nong Prue, Banglamung",
          "city": "Pattaya",
          "state": null,
          "country": "Thailand",
          "postalcode": "20150"
        },
        "address": "147/1 Moo 11 Nong Prue, Banglamung, Pattaya 20150 Thailand",
        "local_name": "Penhouse Hotel Pattaya",
        "local_address": "",
        "local_lang_code": "th",
        "is_candidate_for_contact_info_suppression": false,
        "amenities": [
          {
            "key": "Shuttle Bus Service",
            "name": "Shuttle Bus Service"
          },
          {
            "key": "free_parking",
            "name": "Free parking"
          },
          {
            "key": "airport_transportation",
            "name": "Airport transportation"
          },
          {
            "key": "free_wireless_internet_in_room",
            "name": "Free Wifi"
          },
          {
            "key": "Laundry Service",
            "name": "Laundry Service"
          },
          {
            "key": "non_smoking_hotel",
            "name": "Non-smoking hotel"
          },
          {
            "key": "Housekeeping",
            "name": "Housekeeping"
          },
          {
            "key": "BBQ Facilities",
            "name": "BBQ Facilities"
          },
          {
            "key": "Billiards",
            "name": "Billiards"
          },
          {
            "key": "English - Amenities",
            "name": "English"
          },
          {
            "key": "Shared Kitchen",
            "name": "Shared Kitchen"
          },
          {
            "key": "Thai - Amenities",
            "name": "Thai"
          }
        ],
        "photo_count": "0",
        "has_review_draft": false,
        "has_panoramic_photos": false,
        "rating_histogram": {
          "count_1": "0",
          "count_2": "0",
          "count_3": "0",
          "count_4": "0",
          "count_5": "0"
        }
      }
    ],
    "status": {
      "unfiltered_total_size": "1",
      "pricing_disclaimer": "Prices are the average nightly price provided by our partners and may not include all taxes and fees. Taxes and fees that are shown are estimates only. Please see our partners for more details.",
      "unavailable": "1",
      "commerce_country_iso_code": "US",
      "no_prices": "0",
      "autobroadened": false,
      "progress": "0",
      "auction_key": "b00ac00f97254fcab8fca69596aa8f7d",
      "impression_key": "7d6600f7db6e456c841a02427ea8dee8",
      "pricing": "base"
    }
  }
export default function InfoHoteles() {
    const { hotel_id } = useParams();
    const [hotelInfo, setHotelInfo] = useState(null);

    useEffect(() => {
        getHotelInfo(hotel_id).then((response) => {
            console.log(response);
            //setHotelInfo(response.data);
        }).catch((error) => {
            console.log(error);
            setHotelInfo(exampleHotel.data[0]);
        });
    }, [hotel_id])

    return (
        <>
            {hotelInfo ? <Box>
                <Navbar />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    
                    marginBottom: '2%',


                }}>
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'left',
                        
                    marginRight: '2%'
                }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                           
                            <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '3.5rem',
                            textAlign: 'center',
                            marginTop: '1rem',
                            marginLeft: '2rem',
                            marginRight: '2rem',
                            bgcolor: 'primary.main',
                            borderRadius: '10px',
                            color: '#fff',
                            padding: '1rem',
                            fontFamily: 'Roboto',
                        }
                        }>{hotelInfo.name}</Typography>
                         
                        </Grid>
                        <Grid item xs={10} md={5}>
                               <Contacts location_string={hotelInfo.location_string} phone_number={hotelInfo.phone} />
                            </Grid>
                        <Grid item xs={2} md={2}>
                                <FavButton />
                        </Grid>
                    </Grid>
                    
                    
                </Box>
                


                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '1rem',
                    margin: 'auto',
                    borderRadius: '10px',
                    marginBottom: '2rem',
                }}>
                    <Images />

                </Box>
                <Divider color="#000" />
                <Box
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        marginTop: '2rem',
                        marginBottom: '2rem',
                    }}
                >
                    <Reservar />
                </Box>
                <Divider color="#000" />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '2rem',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',

                    }}>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            textAlign: 'left',
                            marginLeft: '15rem',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                        }}>
                            SERVICIOS
                        </Typography>
                        <Services />

                    </Box>
                    <Mapa />

                </Box>
                <Divider color="#000" />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '2rem',
                }}>
                    <Comment />
                    <Others />



                </Box>

            </Box> : null}
        </>
    );
}
