import {
  request
} from "@/utils/request";
export const getHomeInfo = (data, callback) => {
  request(
    "project_name_deal3",
    "deal",
    "page/11000_index_jx", data,
    false,
    callback
  );
}

export default {
  getHomeInfo
}
