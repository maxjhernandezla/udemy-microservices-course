import { Publisher, OrderCreatedEvent, Subjects } from '@maxjhtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
