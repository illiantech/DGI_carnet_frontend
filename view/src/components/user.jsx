

import React from 'react';
import { FrontUser } from './user-childrens/frontUser';
import { CheckUser } from './user-childrens/checkFrontUser';
import { WrapperUser } from './user-childrens/wrapperUser';
import { DescripWrapperUser } from './user-childrens/descripwrapperUser';

// eslint-disable-next-line react/prop-types
export function User({ delivered, deliveredDate, description, ci, name, id, date, position, dependence, children }) {
  return (
    <article className="user" role="listitem">
      {children}

      <FrontUser ci={ci} name={name} date={date}>
        <CheckUser delivered={delivered} deliveredDate={deliveredDate} id={id} />
      </FrontUser>

      <WrapperUser dependence={dependence} position={position}>
        <DescripWrapperUser description={description} id={id} />
      </WrapperUser>
    </article>
  );
}
