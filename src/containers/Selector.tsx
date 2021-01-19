import React, { memo, useCallback } from "react";
import { WithTooltip, TooltipLinkList } from "@storybook/components";
import { useGlobals, useParameter } from "@storybook/api";

import { DEFAULT_CONFIG, PARAM_KEY } from "../constants";
import { RuntimeSettings } from "../types";
import { Toggler } from "./Toggler";

/** Global state setting */
type GlobalState = {
  /** currently selected option for each possible set */
  [setId: string]: string;
};

export const Selector: React.FC = memo(() => {
  /** user set addon config */
  const config = useParameter<RuntimeSettings>(PARAM_KEY, DEFAULT_CONFIG);
  const [globals, updateGlobals] = useGlobals();
  const globalState: GlobalState = globals[PARAM_KEY] || {};
  const currentSetId = config.setToUse || config.default;
  const selectedOptionId = globalState[currentSetId];
  const selectedSet = config.sets.find((s) => s.id === currentSetId);

  const onSelectorChange = useCallback(
    (selectedThemeId: string) => {
      updateGlobals({
        [PARAM_KEY]: {
          ...globalState,
          [selectedSet.id]: selectedThemeId,
        },
      });
    },
    [config, globalState, updateGlobals]
  );

  if (!currentSetId) {
    return null; // not available
  }

  if (config.disable) {
    return (
      <Toggler
        title={config.title}
        icon={config.icon}
        disabled
        active={false}
      />
    );
  }

  if (!selectedSet) {
    if (config.setToUse) {
      console.warn(
        `Could not find the DropdownSet '${config.setToUse}' specified in the 'setToUse' parameters of the story`
      );
    } else {
      console.warn(
        `Could not find the default DropdownSet '${config.default}'`
      );
    }

    return null;
  }

  if (!selectedSet?.options?.length) {
    return <Toggler title={config.title} icon={config.icon} active={false} />;
  }

  const activeOption =
    selectedSet.options.find((t) => t.id === selectedOptionId) ||
    (config.autoSelectFirstOption !== false
      ? selectedSet.options[0]
      : undefined);
  const activeOptionId = activeOption?.id;

  return (
    <>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({ onHide }) => {
          const onClick = (selectedId: string) => {
            // update GlobalState
            if (activeOptionId !== selectedId) {
              onSelectorChange(selectedId);
            }
            onHide();
          };
          const selectorItems = selectedSet?.options?.map(
            ({ id, title = id, left, right }) => ({
              id,
              title,
              left,
              right,
              onClick: () => onClick(id),
              value: id,
              active: id === activeOption?.id,
            })
          );
          return <TooltipLinkList links={selectorItems} />;
        }}
      >
        <Toggler
          title={config.title}
          icon={config.icon}
          active={activeOption !== undefined}
        />
      </WithTooltip>
    </>
  );
});
