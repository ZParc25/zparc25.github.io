// --- NEW: Store Location Data ---
const storeLocations = [
    {
        name: "Sprouts Farmers Market 802",
        id: "802",
        address: "24 E 2nd St",
        city: "Edmond",
        state: "OK",
        zip: "73034"
    },
    {
        name: "Sprouts Farmers Market 803",
        id: "803",
        address: "559 W Main St",
        city: "Norman",
        state: "OK",
        zip: "73069"
    },
    {
        name: "Sprouts Farmers Market 801",
        id: "801",
        address: "6410 N May Ave",
        city: "Oklahoma City",
        state: "OK",
        zip: "73116"
    },
    {
        name: "Sprouts Farmers Market 808",
        id: "808",
        address: "12200 N Macarthur Blvd",
        city: "Oklahoma City",
        state: "OK",
        zip: "73162"
    },
    {
        name: "Sprouts Farmers Market 812",
        id: "812",
        address: "12100 S Pennsylvania Ave",
        city: "Oklahoma City",
        state: "OK",
        zip: "73170"
    },
    {
        name: "Sprouts Farmers Market 602",
        id: "602",
        address: "1375 S State St",
        city: "Orem",
        state: "UT",
        zip: "84097"
    },
    {
        name: "Whole Foods Market 10167",
        id: "10167",
        address: "3135 Washtenaw Ave",
        city: "Ann Arbor",
        state: "MI",
        zip: "48104"
    },
    {
        name: "Whole Foods Market 10315",
        id: "10315",
        address: "990 W Eisenhower Pkwy",
        city: "Ann Arbor",
        state: "MI",
        zip: "48103"
    },
    {
        name: "Whole Foods Market 10303",
        id: "10303",
        address: "1160 Town & Country Commons Dr",
        city: "Chesterfield",
        state: "MO",
        zip: "63017"
    },
    {
        name: "Whole Foods Market 10535",
        id: "10535",
        address: "4577 W Pine Blvd",
        city: "Saint Louis",
        state: "MO",
        zip: "63108"
    },
    {
        name: "Whole Foods Market 10376",
        id: "10376",
        address: "6001 N Western Ave",
        city: "Oklahoma City",
        state: "OK",
        zip: "73118"
    },
    {
        name: "Whole Foods Market 10280",
        id: "10280",
        address: "544 S 700 E",
        city: "Salt Lake City",
        state: "UT",
        zip: "84102"
    },
    {
        name: "Whole Foods Market 10415",
        id: "10415",
        address: "1131 E Wilmington Ave",
        city: "Salt Lake City",
        state: "UT",
        zip: "84106"
    },
    {
        name: "Whole Foods Market 10430",
        id: "10430",
        address: "6930 S Highland Dr",
        city: "Salt Lake City",
        state: "UT",
        zip: "84121"
    },
    {
        name: "Whole Foods Market 10646",
        id: "10646",
        address: "6598 N Landmark Dr",
        city: "Park City",
        state: "UT",
        zip: "84098"
    },
    {
        name: "Whole Foods Market", // Adjusted for cleaner data
        id: "10694",
        address: "5700 Penn Ave",
        city: "Pittsburgh",
        state: "PA",
        zip: "15206"
    },
    {
        name: "Whole Foods Market", // Adjusted for cleaner data
        id: "10242",
        address: "111 Siena Dr",
        city: "Upper St Clair",
        state: "PA",
        zip: "15241 1318"
    },
    {
        name: "Whole Foods Market", // Adjusted for cleaner data
        id: "10377",
        address: "10576 Perry Hwy",
        city: "Wexford",
        state: "PA",
        zip: "15090 9244"
    }
];
// --- END Store Location Data ---

// --- 1. DATA: Your menu items (updated with SKU, Name, and UPC) ---
const menuItems = [
    { sku: 'AMP0004', name: 'AMP 12oz Congo (WB)', upc: '8-54463-00818-5' },
    { sku: 'AMP0005', name: 'AMP 12oz Honduras (WB)', upc: '8-54463-00802-4' },
    { sku: 'AMP0009', name: 'AMP 12oz Nicaragua ROC (WB)', upc: '8-54463-00864-2' },
    { sku: 'BLU0007', name: 'BLU 12oz Bold (WB) - 810471033090', upc: '8-10471-03309-0' },
    { sku: 'BLU0008', name: 'BLU 12oz Bright (WB) - 810471033076', upc: '8-10471-03307-6' },
    { sku: 'BLU0011', name: 'BLU 12oz Espresso (WB) - 810471033342', upc: '8-10471-03334-2' },
    { sku: 'CMF0001', name: 'CMF 12oz Africa 03 (WB)', upc: '7-05641-25315-9' },
    { sku: 'CMF0004', name: 'CMF 12oz Espresso 01 (WB)', upc: '7-05641-25313-5' },
    { sku: 'CMF0005', name: 'CMF 12oz Filter 02 (WB)', upc: '7-05641-25314-2' },
    { sku: 'CMF0006', name: 'CMF 12oz Latin 04 (WB)', upc: '7-05641-25316-6' },
    { sku: 'CMN0001', name: 'CMN 12oz Canopy Blend (Dark) (WB) - 857873008400', upc: '8-57873-00840-0' },
    { sku: 'CMN0002', name: 'CMN 12oz Heirloom Blend (Medium) (WB) - 857873008363', upc: '8-57873-00836-3' },
    { sku: 'CMN0003', name: 'CMN 12oz Perennial DECAF (WB) - 857873008370', upc: '8-57873-00837-0' },
    { sku: 'CMN0004', name: 'CMN 12oz Sunbeam (Medium) (WB) - 857873008417', upc: '8-57873-00841-7' },
    { sku: 'CUV0002', name: 'CUV 12oz Colombia (WB) - 850000460133', upc: '8-50000-46013-3' },
    { sku: 'CUV0003', name: 'CUV 12oz Emporium House Blend (WB) - 850000460119', upc: '8-50000-46011-9' },
    { sku: 'CUV0017', name: 'CUV 12oz Guatemala (WB) - 850000460140', upc: '8-50000-46014-0' },
    { sku: 'CUV0006', name: 'CUV 12oz Stella Cometa Espresso Blend (WB) - 850000460126', upc: '8-50000-46012-6' },
    { sku: 'CUV0004', name: 'CUV 12oz West Pole Dark Roast (WB) - 850000460102', upc: '8-50000-46010-2' },
    { sku: 'EQT0002', name: 'EQT 10.5oz Equator Blend (WB)', upc: '8-14307-00021-8' },
    { sku: 'EQT0007', name: 'EQT 10.5oz Ethiopia FTO (WB)', upc: '8-14307-00008-9' },
    { sku: 'EQT0003', name: 'EQT 10.5oz French Roast FTO (WB)', upc: '8-14307-00007-2' },
    { sku: 'EQT0005', name: 'EQT 10.5oz Mocha Java FTO (WB)', upc: '8-14307-00011-9' },
    { sku: 'EQT0006', name: 'EQT 10.5oz Organic DECAF (WB)', upc: '8-14307-00009-6' },
    { sku: 'EQT0016', name: 'EQT 10.5oz Regenerative Nicaragua FTO (WB)', upc: '8-14307-00259-5' },
    { sku: 'EQT0009', name: 'EQT 10.5oz Tigerwalk Espresso (WB)', upc: '8-14307-00019-5' },
    { sku: 'GWC0033', name: 'GWC 10oz Honduras (Regen) (WB)', upc: '8-50053-07609-1' },
    { sku: 'GWC0034', name: 'GWC 10oz NICARAGUA (Regen) (WB)', upc: '8-50053-07612-1' },
    { sku: 'GWC0037', name: 'GWC 10oz Peru ROC (Regen) (WB)', upc: '8-50053-07628-2' },
    { sku: 'GWC0035', name: 'GWC 10oz Round Midnight (Regen) (WB)', upc: '8-50053-07611-4' },
    { sku: 'GWC0036', name: 'GWC 10oz Wild Bloom (Regen) (WB)', upc: '8-50053-07610-7' },
    { sku: 'GWC0025', name: 'GWC 12oz Big Easy (G)', upc: '8-59563-00667-' },
    { sku: 'GWC0001', name: 'GWC 12oz Bitches Brew (WB)', upc: '8-93723-00238-9' },
    { sku: 'GWC0015', name: 'GWC 12oz Black Gold (WB)', upc: '8-93723-00237-2' },
    { sku: 'GWC0026', name: 'GWC 12oz Brazil (WB)', upc: '8-93723-00288-' },
    { sku: 'GWC0004', name: 'GWC 12oz Ethiopia (WB)', upc: '8-93723-00242-6' },
    { sku: 'GWC0014', name: 'GWC 12oz Seasonal Select (WB)', upc: '8-59563-00615-4' },
    { sku: 'GWC0027', name: 'GWC 12oz Sumatra (WB)', upc: '8-93723-00245-' },
    { sku: 'HKR0001', name: 'HKR 12oz Caramel (G)', upc: '8-50012-61408-1' },
    { sku: 'HKR0002', name: 'HKR 12oz Dark Roast (G)', upc: '8-50012-61411-1' },
    { sku: 'HKR0003', name: 'HKR 12oz Hazelnut (G)', upc: '8-50012-61407-4' },
    { sku: 'HKR0004', name: 'HKR 12oz Medium Roast (G)', upc: '8-50012-61410-4' },
    { sku: 'HKR0005', name: 'HKR 12oz S\'mores (G)', upc: '8-50012-61406-7' },
    { sku: 'HKR0006', name: 'HKR 12oz Vanilla (G)', upc: '8-50012-61409-8' },
    { sku: 'HUK0001', name: 'HUK 12oz Blue Orchid (WB)', upc: '8-50365-00614-4' },
    { sku: 'HUK0010', name: 'HUK 12oz Bom Senso Coffee (WB)', upc: '8-50365-00632-8' },
    { sku: 'HUK0011', name: 'HUK 12oz Civitas Coffee Blend (WB)', upc: '8-50365-00623-6' },
    { sku: 'HUK0002', name: 'HUK 12oz Natural African Single Origin (WB)', upc: '8-50365-00620-5' },
    { sku: 'HUK0004', name: 'HUK 12oz Phantom Limb (WB)', upc: '8-50365-00615-1' },
    { sku: 'HUK0006', name: 'HUK 12oz Seasonal Single Origin (WB)', upc: '8-50365-00622-9' },
    { sku: 'HUK0008', name: 'HUK 12oz South American Single Origin (WB)', upc: '8-50365-00617-5' },
    { sku: 'HUK0009', name: 'HUK 12oz Washed African Single Origin (WB)', upc: '8-50365-00621-2' },
    { sku: 'ITG0001', name: 'ITG 11oz El Gallo (WB)', upc: '8-00222-00020-4' },
    { sku: 'ITG0002', name: 'ITG 12oz Analog Black Cat (WB)', upc: '8-00222-11435-2' },
    { sku: 'ITG0003', name: 'ITG 12oz Classic Black Cat (WB)', upc: '8-00222-12012-4' },
    { sku: 'ITG0004', name: 'ITG 12oz El Diablo (WB)', upc: '8-00222-12020-9' },
    { sku: 'ITG0005', name: 'ITG 12oz Frequency Blend (WB)', upc: '8-00222-12952-3' },
    { sku: 'ITG0006', name: 'ITG 12oz House (G)', upc: '8-00222-00014-3' },
    { sku: 'ITG0007', name: 'ITG 12OZ HOUSE BLEND (WB)', upc: '8-00222-12041-4' },
    { sku: 'ITG0008', name: 'ITG 12oz Sublunar Black Cat (WB)', upc: '8-00222-00057-0' },
    { sku: 'JPC0001', name: 'JPC 10oz Organic Breakfast Blend (G) - 780115106254', upc: '7-80115-10625-4' },
    { sku: 'JPC0003', name: 'JPC 10oz Organic French Roast (G) - 780115106216', upc: '7-80115-10621-6' },
    { sku: 'JPC0041', name: 'JPC 10oz Yerba Mate - Powercafe (G) - 780115122278', upc: '7-80115-12227-8' },
    { sku: 'JPC0014', name: 'JPC 1lb Organic Pick of the Harvest (WB) - 780115411136', upc: '7-80115-41113-6' },
    { sku: 'MLT0001', name: 'MLT SINGLE-SERVE Matcha (12ct)', upc: '6-56252-40088-6' },
    { sku: 'MLT0002', name: 'MLT Stitch African Nectar (15ct)', upc: '6-56252-40007-7' },
    { sku: 'MLT0003', name: 'MLT Stitch Breakfast (15ct)', upc: '6-56252-40003-9' },
    { sku: 'MLT0004', name: 'MLT Stitch Chamomile Citrus (15ct)', upc: '6-56252-40001-5' },
    { sku: 'MLT0005', name: 'MLT Stitch Earl Grey (15ct)', upc: '6-56252-40004-6' },
    { sku: 'MLT0006', name: 'MLT Stitch Green Tea Tropical (15ct)', upc: '6-56252-40002-2' },
    { sku: 'MLT0007', name: 'MLT Stitch Spring Jasmine (15ct)', upc: '6-56252-40016-9' },
    { sku: 'MLT0008', name: 'MLT Tin Mint Matcha (1.5oz)', upc: '7-85357-02491-5' },
    { sku: 'MLT0009', name: 'MLT Tin Org Matcha Green Tea (1.5oz)', upc: '6-56252-97003-7' },
    { sku: 'MLT0010', name: 'MLT Tin Org Spiced Turmeric Matcha (1.5oz)', upc: '6-56252-49231-7' },
    { sku: 'MTP0008', name: 'MTP 10.5oz Granville Blend FTO (WB)', upc: '8-57068-00410-1' },
    { sku: 'MTP0003', name: 'MTP 10.5oz La Cordlillera (WB)', upc: '8-52618-00140-1' },
    { sku: 'MTP0004', name: 'MTP 10.5oz Redline (WB)', upc: '8-57068-00403-3' },
    { sku: 'MTP0009', name: 'MTP 10.5oz Schweiks Blend (WB)', upc: '8-52618-00196-8' },
    { sku: 'PCE0001', name: 'PCE 12oz Birchwood Breakfast Blend (Medium) (G) - 895431000114', upc: '8-95431-00011-4' },
    { sku: 'PCE0002', name: 'PCE 12OZ Birchwood Breakfast Blend (Medium) (WB) - 895431000374', upc: '8-95431-00037-4' },
    { sku: 'PCE0005', name: 'PCE 12oz Morning Glory (Light) (G) - 895431000688', upc: '8-95431-00068-8' },
    { sku: 'PCE0007', name: 'PCE 12oz Tree Hugger (Dark) (G) - 895431000329', upc: '8-95431-00032-9' },
    { sku: 'PCE0010', name: 'PCE SINGLE-SERVE-12CT BIRCHWOOD (K-CUP) - 853523008936', upc: '8-53523-00893-6' },
    { sku: 'PHZ0002', name: 'PHZ 12oz Jacob\'s Wonderbar (WB) - 812556030000', upc: '8-12556-03000-0' },
    { sku: 'PHZ0004', name: 'PHZ 12oz Philtered Soul (WB) - 812556030062', upc: '8-12556-03006-2' },
    { sku: 'PHZ0003', name: 'PHZ 12oz Tesora (WB) - 812556030093', upc: '8-12556-03009-3' },
    { sku: 'PRS0007', name: 'PRS 12oz Four Corners (WB) - 850030404206', upc: '8-50030-40420-6' },
    { sku: 'PRS0006', name: 'PRS 12oz Org Evergreen (WB) - 850030404428', upc: '8-50030-40442-8' },
    { sku: 'PRS0004', name: 'PRS 12oz Twitch Espresso (WB) - 860000013536', upc: '8-60000-01353-6' },
    { sku: 'PTS0001', name: 'PTS 10.5oz Alameda Morning Blend (G)', upc: '7-85357-02487-8' },
    { sku: 'PTS0002', name: 'PTS 10.5oz Big Bang (G)', upc: '7-85357-02352-9' },
    { sku: 'PTS0003', name: 'PTS 10.5oz Big Bang (WB)', upc: '7-85357-02351-2' },
    { sku: 'PTS0004', name: 'PTS 10.5oz Brazil SO (G)', upc: '7-85357-02245-4' },
    { sku: 'PTS0005', name: 'PTS 10.5oz Cafe Domingo (G)', upc: '7-85357-02556-1' },
    { sku: 'PTS0006', name: 'PTS 10.5oz Colombia SO (G)', upc: '7-85357-02247-8' },
    { sku: 'PTS0010', name: 'PTS 10.5oz DECAF Major Dickasons (G)', upc: '7-85357-02248-5' },
    { sku: 'PTS0011', name: 'PTS 10.5oz French Roast (G)', upc: '7-85357-02552-3' },
    { sku: 'PTS0013', name: 'PTS 10.5oz House Blend (G)', upc: '7-85357-02554-7' },
    { sku: 'PTS0015', name: 'PTS 10.5oz Luminosa Breakfast Blend (G)', upc: '7-85357-02559-2' },
    { sku: 'PTS0016', name: 'PTS 10.5oz Major Dickasons (G)', upc: '7-85357-02350-5' },
    { sku: 'PTS0017', name: 'PTS 10.5oz Major Dickasons (WB)', upc: '7-85357-02349-9' },
    { sku: 'PTS0018', name: 'PTS 10.5oz Off The Grid (G)', upc: '7-85357-02765-7' },
    { sku: 'PTS0019', name: 'PTS 10.5oz ORG French Roast (G)', upc: '7-85357-01710-8' },
    { sku: 'PTS0020', name: 'PTS 10.5oz Sumatra SO (G)', upc: '7-85357-02246-1' },
    { sku: 'PTS0021', name: 'PTS 10.5oz Sun Catcher (G)', upc: '7-85357-02767-1' },
    { sku: 'PTS0028', name: 'PTS 18OZ BIG BANG (G)', upc: '7-85357-02360-4' },
    { sku: 'PTS0030', name: 'PTS 18OZ FRENCH ROAST (G)', upc: '7-85357-02560-8' },
    { sku: 'PTS0032', name: 'PTS 18OZ MAJOR DICKASONS (G)', upc: '7-85357-02356-7' },
    { sku: 'PTS0034', name: 'PTS 18OZ ORG FRENCH ROAST (G)', upc: '7-85357-02358-1' },
    { sku: 'PTS0035', name: 'PTS Capsule Caramel (10ct)', upc: '7-85357-02623-0' },
    { sku: 'PTS0036', name: 'PTS Capsule Crema Scura (10ct)', upc: '7-85357-01945-4' },
    { sku: 'PTS0038', name: 'PTS Capsule Nerissimo (10ct)', upc: '7-85357-01943-0' },
    { sku: 'PTS0039', name: 'PTS Capsule Ricchezza (10ct)', upc: '7-85357-01946-1' },
    { sku: 'PTS0040', name: 'PTS Capsule Ristretto (10ct)', upc: '7-85357-01944-7' },
    { sku: 'PTS0041', name: 'PTS Single-Serve 10ct Alma De La Tierra (K-Cup)', upc: '7-85357-01712-2' },
    { sku: 'PTS0042', name: 'PTS Single-Serve 10ct Big Bang (K-Cup)', upc: '7-85357-02463-2' },
    { sku: 'PTS0044', name: 'PTS Single-Serve 10ct Café Domingo (K-Cup)', upc: '7-85357-02468-7' },
    { sku: 'PTS0048', name: 'PTS Single-Serve 10ct French Roast (K-Cup)', upc: '7-85357-02472-4' },
    { sku: 'PTS0053', name: 'PTS Single-Serve 10ct Major Dickasons (K-Cup)', upc: '7-85357-02435-9' },
    { sku: 'PTS0056', name: 'PTS Single-Serve 32ct Brazil SO (K-Cup)', upc: '7-85357-01925-6' },
    { sku: 'PTS0057', name: 'PTS Single-Serve 32ct French Roast (K-Cup)', upc: '7-85357-02474-8' },
    { sku: 'PTS0058', name: 'PTS Single-Serve 32ct Major Dickasons (K-Cup)', upc: '7-85357-02437-3' },
    { sku: 'RCK0002', name: 'RCK 12oz Breakfast Blend (WB)', upc: '8-51544-00609-2' },
    { sku: 'RCK0004', name: 'RCK 12oz Day Star (WB)', upc: '8-51544-00606-1' },
    { sku: 'RCK0005', name: 'RCK 12oz DECAF (WB)', upc: '8-51544-00602-3' },
    { sku: 'RCK0007', name: 'RCK 12oz Leaps and Bounds (WB)', upc: '8-51544-00604-7' },
    { sku: 'RCK0008', name: 'RCK 12oz Mountain Espresso (WB)', upc: '8-51544-00600-9' },
    { sku: 'RCK0009', name: 'RCK 12oz Rock Canyon House (WB)', upc: '8-51544-00601-6' },
    { sku: 'RCK0010', name: 'RCK 12oz Seasonal (WB)', upc: '8-51544-00608-5' },
    { sku: 'SLR0002', name: 'SLR 12oz Org DECAF Blend (WB) - 689076587105', upc: '6-89076-58710-5' },
    { sku: 'SLR0001', name: 'SLR 12oz Org Guatemala (WB) - 689076587006', upc: '6-89076-58700-6' },
    { sku: 'SPW0002', name: 'SPW 12oz Colombia (WB)', upc: '1-80626-00063-6' },
    { sku: 'SPW0003', name: 'SPW 12oz Ethiopia (WB)', upc: '1-80626-00064-3' },
    { sku: 'SPW0004', name: 'SPW 12oz Founders Blend (WB)', upc: '8-55186-00628-1' },
    { sku: 'SPW0005', name: 'SPW 12oz French Roast (WB)', upc: '1-80626-00017-9' },
    { sku: 'SPW0006', name: 'SPW 12oz Hair Bender (G)', upc: '8-40121-60016-7' },
    { sku: 'SPW0007', name: 'SPW 12oz Hair Bender (WB)', upc: '1-80626-00015-5' },
    { sku: 'SPW0008', name: 'SPW 12oz Holler Mountain (G)', upc: '8-40121-60015-0' },
    { sku: 'SPW0009', name: 'SPW 12oz Holler Mountain Blend (WB)', upc: '1-80626-00016-2' },
    { sku: 'SPW0010', name: 'SPW 12oz Homestead Blend (WB)', upc: '8-55186-00625-0' },
    { sku: 'SPW0011', name: 'SPW 12oz Hundred Mile (WB)', upc: '8-55186-00624-3' },
    { sku: 'SPW0013', name: 'SPW 18OZ HAIR BENDER BLEND (WB)', upc: '8-40121-65045-2' },
    { sku: 'SPW0014', name: 'SPW 18OZ HOLLER MOUNTAIN BLEND (WB)', upc: '8-40121-60033-4' },
    { sku: 'VRV0002', name: 'VRV 12oz Africa (WB)', upc: '8-99296-00220-7' },
    { sku: 'VRV0003', name: 'VRV 12oz Buena Vista Dark (WB)', upc: '8-99296-00211-5' },
    { sku: 'VRV0004', name: 'VRV 12oz French (WB)', upc: '8-99296-00215-3' },
    { sku: 'VRV0005', name: 'VRV 12oz House (WB)', upc: '8-99296-00216-0' },
    { sku: 'VRV0006', name: 'VRV 12oz Latin (WB)', upc: '8-99296-00218-4' },
    { sku: 'VRV0008', name: 'VRV 12oz Sermon Blend OG (WB)', upc: '8-99296-00213-9' },
    { sku: 'VRV0007', name: 'VRV 12oz Streetlevel (WB)', upc: '8-99296-00212-2' }
];

// --- 2. DOM Elements ---
const menuItemInput = document.getElementById('menuItem');
const autocompleteList = document.getElementById('autocomplete-list');
const quantityInput = document.getElementById('quantity');
const addItemBtn = document.getElementById('addItemBtn');
const orderList = document.getElementById('orderList');
const reviewSubmitBtn = document.getElementById('reviewSubmitBtn');
const storeLocationSelect = document.getElementById('storeLocation');

let currentOrder = []; // Stores the selected items and their quantities

// --- 3. Autocomplete Functionality for Menu Items ---
menuItemInput.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    closeAllLists();
    if (!inputValue) {
        return false;
    }

    let a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);

    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(inputValue) ||
        item.sku.toLowerCase().includes(inputValue) ||
        item.upc.includes(inputValue)
    );

    if (filteredItems.length === 0) {
        return;
    }

    filteredItems.forEach(item => {
        let b = document.createElement("DIV");
        // Display "Product Name - Barcode" in the dropdown
        b.innerHTML = `<strong>${item.name}</strong> - ${item.upc}`;
        b.innerHTML += `<input type='hidden' value='${item.sku}'>`; // Store SKU
        b.addEventListener('click', function() {
            menuItemInput.value = item.name; // Display full name in input
            menuItemInput.dataset.sku = item.sku; // Store selected SKU
            menuItemInput.dataset.upc = item.upc; // Store selected UPC
            closeAllLists();
        });
        a.appendChild(b);
    });
});

function closeAllLists(elmnt) {
    const x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != menuItemInput) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});

// --- 4. Add Item to Order ---
addItemBtn.addEventListener('click', function() {
    const selectedItemName = menuItemInput.value.trim();
    const selectedItemSku = menuItemInput.dataset.sku;
    const selectedItemUpc = menuItemInput.dataset.upc;
    const quantity = parseInt(quantityInput.value, 10);

    if (selectedItemName === "" || !selectedItemSku || isNaN(quantity) || quantity <= 0) {
        alert("Please select a valid item and enter a quantity.");
        return;
    }

    const existingItemIndex = currentOrder.findIndex(item => item.sku === selectedItemSku);

    if (existingItemIndex > -1) {
        // Update quantity if item already in order
        const existingQuantityInput = currentOrder[existingItemIndex].quantityInput;
        existingQuantityInput.value = parseInt(existingQuantityInput.value, 10) + quantity;
    } else {
        // Add new item to order
        const item = menuItems.find(i => i.sku === selectedItemSku);
        if (item) {
            const listItem = document.createElement('li');
            listItem.dataset.sku = item.sku; // Store SKU on the list item

            const itemElement = document.createElement('span');
            // Display all information when item is added to the order
            itemElement.innerHTML = `
                <span>
                    <strong>${item.name}</strong><br>
                    <small>SKU: ${item.sku} | UPC: ${item.upc}</small>
                </span>
            `;
            listItem.appendChild(itemElement);

            const controlsDiv = document.createElement('div');
            controlsDiv.classList.add('quantity-controls');

            const itemQuantityInput = document.createElement('input');
            itemQuantityInput.type = 'number';
            itemQuantityInput.value = quantity;
            itemQuantityInput.min = '1';
            itemQuantityInput.addEventListener('change', function() {
                if (parseInt(this.value, 10) <= 0) {
                    this.value = 1; // Prevent quantity from going below 1
                }
            });
            controlsDiv.appendChild(itemQuantityInput);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.addEventListener('click', function() {
                orderList.removeChild(listItem);
                currentOrder = currentOrder.filter(orderItem => orderItem.sku !== listItem.dataset.sku);
            });
            controlsDiv.appendChild(removeBtn);

            listItem.appendChild(controlsDiv);
            orderList.appendChild(listItem);

            currentOrder.push({
                sku: item.sku,
                name: item.name,
                upc: item.upc,
                quantityInput: itemQuantityInput
            });
        }
    }

    // Clear input fields after adding
    menuItemInput.value = '';
    delete menuItemInput.dataset.sku;
    delete menuItemInput.dataset.upc;
    quantityInput.value = 1;
});

// --- 5. Review and Submit Order ---
reviewSubmitBtn.addEventListener('click', function() {
    const storeLocation = storeLocationSelect.value;

    if (storeLocation === "") {
        alert("Please select a store location.");
        return;
    }

    if (currentOrder.length === 0) {
        alert("Your order is empty. Please add items.");
        return;
    }

    const items = currentOrder.map(item => {
        return {
            sku: item.sku,
            name: item.name,
            upc: item.upc,
            quantity: parseInt(item.quantityInput.value, 10) || 1
        };
    });

    const orderDetails = {
        storeId: storeLocation,
        items: items
    };

    console.log("Order Details:", orderDetails);
    alert("Order submitted! Check the console for details.");

    // Clear the form after submission
    storeLocationSelect.value = "";
    orderList.innerHTML = "";
    currentOrder = [];
});

// --- NEW: Populate Store Location Dropdown on Load ---
document.addEventListener('DOMContentLoaded', () => {
    const storeLocationSelect = document.getElementById('storeLocation');

    if (storeLocationSelect) { // Check if the element exists
        // Clear any placeholder options that might be in the HTML
        storeLocationSelect.innerHTML = '<option value="">Select a Store</option>';

        storeLocations.forEach(store => {
            const option = document.createElement('option');
            option.value = store.id; // This is the ID that will be used when selected
            // Display full store information in the dropdown
            option.textContent = `${store.name} - ${store.address}, ${store.city}, ${store.state} ${store.zip}`;
            storeLocationSelect.appendChild(option);
        });
    }
});
