//import Leaflet from 'leaflet'
import { waitingStyle, onewayStyle, prohibitionofdrivingStyle, pedestrianisationStyle, widthweightStyle, trafficcalmingStyle, residentsparkingStyle, minorroadalterationsStyle} from './Styles'
import { waitingPopup, onewayPopup, prohibitionofdrivingPopup, pedestrianisationPopup, widthweightPopup, trafficcalmingPopup, residentsparkingPopup, minorroadalterationsPopup} from './Popups'

const Configuration = {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 2,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container'
    },
    DynamicData: 
    [

        {
            key: 'Q3.6 - Waiting or Loading Restrictions 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: waitingStyle,
                onEachFeature: waitingPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q3.6 - One Way 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6c&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: onewayStyle,
                onEachFeature: onewayPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.6 - Prohibition of Driving 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6d&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: prohibitionofdrivingStyle,
                onEachFeature: prohibitionofdrivingPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.6 - Pedestrianisation 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6e&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: pedestrianisationStyle,
                onEachFeature: pedestrianisationPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q3.6 - Width or Weight Restriction 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6f&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: widthweightStyle,
                onEachFeature: widthweightPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q3.6 - Traffic Calming 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6g&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: trafficcalmingStyle,
                onEachFeature: trafficcalmingPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q3.6 - Residents Parking Controls Buffered',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6h&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: residentsparkingStyle,
                onEachFeature: residentsparkingPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.6 - Minor Road Alteration Buffered',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6i&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: minorroadalterationsStyle,
                onEachFeature: minorroadalterationsPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },

        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
    ],

    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration