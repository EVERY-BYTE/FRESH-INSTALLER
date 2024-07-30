"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAddress = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
// import { Pagination } from '../../utilities/pagination'
// import { requestChecker } from '../../utilities/requestCheker'
// import { CONSOLE } from '../../utilities/log'
const address_1 = require("../../models/address");
// export const findAllAddress = async (req: any, res: Response): Promise<any> => {
//   try {
//     const page = new Pagination(
//       parseInt(req.query.page) ?? 0,
//       parseInt(req.query.size) ?? 10
//     )
//     const result = await AddressesModel.findAndCountAll({
//       where: {
//         deleted: { [Op.eq]: 0 },
//         addressUserId: { [Op.eq]: req.body?.user?.userId },
//         ...(Boolean(req.query.search) && {
//           [Op.or]: [{ addressUserName: { [Op.like]: `%${req.query.search}%` } }]
//         })
//       },
//       order: [['id', 'desc']],
//       ...(req.query.pagination === 'true' && {
//         limit: page.limit,
//         offset: page.offset
//       })
//     })
//     const response = ResponseData.default
//     response.data = page.data(result)
//     return res.status(StatusCodes.OK).json(response)
//   } catch (error: any) {
//     CONSOLE.error(error.message)
//     const message = `unable to process request! error ${error.message}`
//     const response = ResponseData.error(message)
//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
//   }
// }
const findAddress = async (req, res) => {
    try {
        const result = await address_1.AddressesModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                addressUserId: { [sequelize_1.Op.eq]: req.body?.user?.userId }
            }
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const response = response_1.ResponseData.default;
        response.data = result;
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findAddress = findAddress;
