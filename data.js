var APP_DATA = {
  "scenes": [
    {
      "id": "0-door",
      "name": "Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.11179178030377201,
          "pitch": 0.5072255598911433,
          "rotation": 0,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.7991156538062203,
        "pitch": 0.3750866036734113,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.6371821161601385,
          "pitch": 0.5084136963254373,
          "rotation": 0.7853981633974483,
          "target": "2-living"
        },
        {
          "yaw": 0.4292852165015191,
          "pitch": 0.40908313503551064,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -0.5104725660405514,
          "pitch": 0.745335921256018,
          "rotation": 4.71238898038469,
          "target": "4-bedroom"
        },
        {
          "yaw": 0.015123569969922812,
          "pitch": 0.27995648696532527,
          "rotation": 0,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.5598479216012571,
        "pitch": 0.49721162940581465,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.03620876106234405,
          "pitch": 0.767447677442135,
          "rotation": 0,
          "target": "2-living"
        },
        {
          "yaw": -2.755026069900797,
          "pitch": 0.3450100800869329,
          "rotation": 4.71238898038469,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.0261527233232624,
          "pitch": 0.1655643974818517,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -1.996927183518146,
          "pitch": 0.45599374113909263,
          "rotation": 1.5707963267948966,
          "target": "3-dining"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7848931026095567,
          "pitch": 0.6776832488494549,
          "title": "Sofa",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.7452154979039474,
        "pitch": 0.3769565779246449,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.7397708702307924,
          "pitch": 0.6763324136909592,
          "rotation": 13.351768777756625,
          "target": "9-balcony"
        },
        {
          "yaw": -0.18139938757127894,
          "pitch": 0.42391992081097385,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -1.8874606897496662,
          "pitch": 0.5371823103517279,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -0.6529436824830768,
          "pitch": 0.43377269715577427,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.36687752994147615,
          "pitch": 0.6819496543953054,
          "title": "Dining&nbsp;",
          "text": "Table"
        }
      ]
    },
    {
      "id": "4-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.2569017821412629,
        "pitch": 0.7093252287084546,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.0052013483352775,
          "pitch": 0.5534662553070895,
          "rotation": 1.5707963267948966,
          "target": "8-bathroom"
        },
        {
          "yaw": -1.5615837964520356,
          "pitch": 0.5408341967504455,
          "rotation": 0,
          "target": "2-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-sidw-view",
      "name": "Bedroom sidw view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.3550857477258713,
        "pitch": 0.5907307674676012,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.585531505902402,
          "pitch": 0.7576145162065746,
          "rotation": 5.497787143782138,
          "target": "8-bathroom"
        },
        {
          "yaw": -1.611872855647487,
          "pitch": 0.3847370653548303,
          "rotation": 0,
          "target": "7-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9752968619584319,
          "pitch": 0.4697647994584404,
          "title": "Bedroom",
          "text": "01"
        }
      ]
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4907605724074902,
          "pitch": 0.44051676688457597,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 1.7175035296125412,
          "pitch": 0.5384380351614642,
          "rotation": 0,
          "target": "10-sitiut"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2914,
      "initialViewParameters": {
        "yaw": -2.957405215343801,
        "pitch": 0.33324159943681764,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.7124197771885825,
          "pitch": 0.2966836985046726,
          "rotation": 0.7853981633974483,
          "target": "4-bedroom"
        },
        {
          "yaw": 0.05840581319688276,
          "pitch": 0.8812926410659649,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -0.9188753170151447,
          "pitch": 0.5448973151974013,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": 2.1036822020572004,
          "pitch": 0.4933157439655389,
          "rotation": 0,
          "target": "9-balcony"
        },
        {
          "yaw": 2.8629908229334315,
          "pitch": 0.20301401331098923,
          "rotation": 5.497787143782138,
          "target": "2-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4736589688546111,
          "pitch": 0.13999504397330576,
          "title": "Wash",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.9935693414982074,
        "pitch": 1.0366508699281631,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.26645187436900386,
          "pitch": 0.8708460806285654,
          "rotation": 0,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.032482913876769715,
        "pitch": 0.4118463047488099,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.07434681741505145,
          "pitch": 0.7680026905549546,
          "rotation": 0,
          "target": "10-sitiut"
        },
        {
          "yaw": 2.323551098644198,
          "pitch": 0.32493185675581415,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.635963415870693,
          "pitch": 0.37266000068955485,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.35268161136481,
          "pitch": 0.5475131278121772,
          "rotation": 7.0685834705770345,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sitiut",
      "name": "Sitiut",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.18360764308744493,
        "pitch": 0.43435163996884185,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 3.1359446088105436,
          "pitch": 0.5572197248624313,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Terrace by Ladder",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
