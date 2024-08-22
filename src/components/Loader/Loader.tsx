'use client'

import css from "./Loader.module.css";
import { InfinitySpin } from 'react-loader-spinner';

export default function LoadingCat () {
  return (
    <div className={css.loader}>
      <InfinitySpin width="200" color="#00E0A5"/>
    </div>
  );
}