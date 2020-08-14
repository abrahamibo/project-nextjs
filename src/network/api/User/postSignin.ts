import ApiConfig from "../ApiConfig";

export default function signin(body) {
  return ApiConfig.post("/login", body);
}