import { useSelector } from 'react-redux';

import {
  selectCartCount,
  selectIsCartOpen
} from '../../store/cart/cart.selector';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { setIsCartOpen } from '../../store/cart/cart.slice';
import { useAppDispatch } from '../../store/store';

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
