/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bus-01',
                            type: 'image',
                            rect: ['817px', '249px', '143px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bus-01.png",'0px','0px']
                        },
                        {
                            id: 'bus-01Copy',
                            type: 'image',
                            rect: ['817px', '249px', '143px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bus-01.png",'0px','0px']
                        },
                        {
                            id: 'car-01',
                            type: 'image',
                            rect: ['0px', '269px', '99px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car-01.png",'0px','0px']
                        },
                        {
                            id: 'car-01Copy',
                            type: 'image',
                            rect: ['0px', '269px', '99px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car-01.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '960px', '300px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid83",
                            "top",
                            2869,
                            0,
                            "linear",
                            "${bus-01Copy}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid17",
                            "left",
                            1000,
                            2000,
                            "linear",
                            "${bus-01}",
                            '817px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${bus-01Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            2250,
                            0,
                            "linear",
                            "${bus-01Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            3750,
                            250,
                            "linear",
                            "${bus-01Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "top",
                            153,
                            0,
                            "linear",
                            "${car-01Copy}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid84",
                            "top",
                            2869,
                            0,
                            "linear",
                            "${bus-01}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${car-01Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${car-01Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4",
                            "left",
                            1750,
                            3000,
                            "linear",
                            "${car-01}",
                            '0px',
                            '861px'
                        ],
                        [
                            "eid82",
                            "top",
                            2566,
                            0,
                            "linear",
                            "${car-01}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            2000,
                            "linear",
                            "${bus-01Copy}",
                            '817px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${car-01Copy}",
                            '0px',
                            '861px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${bus-01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${bus-01}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${car-01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            4500,
                            250,
                            "linear",
                            "${car-01}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("honda_edgeActions.js");
})("EDGE-59940217");
