import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
      return res.status(400).json({
        message: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.status(204);
  } catch (error) {
    res.send(500).json(error);
  }
}
