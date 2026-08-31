import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Footer/Copyright';

import styles from './styles.module.css';

export default function FooterCopyright({copyright}: Props): ReactNode {
  return (
    <>
      <p className={styles.donationCallout}>
        If you found this book helpful, please consider donating to the{' '}
        <a href="https://archive.org/donate/">Internet Archive</a>.
      </p>
      <div
        className="footer__copyright"
        // The site configuration provides this trusted HTML.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: copyright}}
      />
    </>
  );
}
