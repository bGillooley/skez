import nc from "next-connect";
import cors from "cors";
import axios from "axios";
import convert from "xml-js";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .get(async (req, res) => {
    var config = {
      method: "get",
      url: "https://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=Skerries",
      headers: {},
    };
    const micky = axios(config)
      .then(function (res) {
        const returnData = convert.xml2json(res.data, {
          compact: true,
          spaces: 4,
        });
        console.log("Billy sez...", returnData);
      })
      .catch(function (error) {
        console.log(error);
      });
    res.status(200).json(micky);
  });

export default handler;
