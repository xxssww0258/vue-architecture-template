import { getUserAjaxMock } from "./user";
import { getUserListAjaxMock } from "./other";

if (process.env.NODE_ENV === "development") {
  const Mock = require("mockjs");

  Mock.mock(
    getUserListAjaxMock[0],
    getUserListAjaxMock[1],
    getUserListAjaxMock[2]
  );
  Mock.mock(getUserAjaxMock[0], getUserAjaxMock[1], getUserAjaxMock[2]);
}
