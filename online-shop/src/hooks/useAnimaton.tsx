import { useEffect, useState } from 'react';

export default function useAnimaton(time: number, state: unknown) {
  let [isDisappearAnimationAdded, setIsDisappearAnimationAdded] = useState(false);
  let [isFirstRender, setIsFirstRender] = useState(true);
  console.log(isFirstRender, 'render');
  console.log(typeof state);
  useEffect(() => {
    if (Array.isArray(state)) {
      if (isFirstRender) return;
      if (!state.length) {
        console.log('state.length', state.length);
        setIsDisappearAnimationAdded(true);
      } else if (isDisappearAnimationAdded) {
        console.log('ababababa');
        setIsDisappearAnimationAdded(false);
      }
    }
  }, [state]);
  useEffect(() => {
    setIsFirstRender(false);
  }, []);
  return {
    isDisappearAnimationAdded,
  };
}
