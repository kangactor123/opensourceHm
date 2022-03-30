import { useState } from "react";

export default function useIsMenuOpen() {
  const isMenuOpen = useState(false);
  return isMenuOpen;
}
