import Axios from "axios";

export const updateCv = async (CvData, id) => {
    const result = await Axios.put(
      "http://localhost:5000/cv/update/" + id,
      CvData
    );
    return result.data;
  };

export const getCvbyid = async (id) => {
    const result = await Axios.get("http://localhost:5000/cv/getbyid/" + id);
    return result.data;
  };