import * as React from 'react';
import { useListbox_unstable } from './useListbox';
import { renderListbox_unstable } from './renderListbox';
import { useListboxStyles_unstable } from './useListboxStyles';
import type { ListboxProps } from './Listbox.types';
import { useListboxContextValues } from '../../contexts/useListboxContextValues';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';

/**
 * Listbox component: a standalone selection control, or the popup in a Combobox
 */
export const Listbox: ForwardRefComponent<ListboxProps> = React.forwardRef((props, ref) => {
  const state = useListbox_unstable(props, ref);
  const contextValues = useListboxContextValues(state);

  useListboxStyles_unstable(state);

  const { useListboxStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderListbox_unstable(state, contextValues);
});

Listbox.displayName = 'Listbox';
