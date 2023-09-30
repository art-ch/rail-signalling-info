import React from 'react';

import { SignWrapper } from 'src/components/molecules/SignWrapper';

import { Hand } from '../../molecules/CISSigns/Hand';
import { RailSwitchSign } from '../../molecules/CISSigns/RailSwitchSign';
import { TrackObstruction } from '../../molecules/CISSigns/TrackObstruction';
import { SlowDown } from '../../molecules/CISSigns/SlowDown';
import { DangerousPlaceBoundaries } from '../../molecules/CISSigns/DangerousPlaceBoundaries';
import { Stop } from '../../molecules/CISSigns/Stop';
import { BlockBorder } from '../../molecules/CISSigns/BlockBorder';
import { HandHeldSign } from '../../molecules/CISSigns/HandHeldSign';
import { CISHorn } from '../../molecules/CISSigns/CISHorn';
import { CISHotAxles } from '../../molecules/CISSigns/CISHotAxles';
import { TogglePantograph } from '../../molecules/CISSigns/TogglePantograph';
import { CISNeutralZone } from '../../molecules/CISSigns/CISNeutralZone';
import { ToggleCurrent } from '../../molecules/CISSigns/ToggleCurrent';
import { CISBoundaryPole } from '../../molecules/CISSigns/CISBoundaryPole';
import { BioHazardSign } from '../../molecules/CISSigns/BioHazardSign';
import { TextSign } from '../../molecules/CISSigns/TextSign';
import { CISSnowPlowSign } from '../../molecules/CISSigns/CISSnowPlowSign';

import css from './CISContentRenderer.module.scss';

export type CISSignRendererProps = { id: number; isHovered: boolean };

export const CISSignRenderer = ({ id, isHovered }: CISSignRendererProps) => {
  switch (id) {
    case 1:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <HandHeldSign type="disc" />
          <HandHeldSign type="light" props={{ lightColor: 'green' }} />
        </SignWrapper>
      );

    case 2:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <HandHeldSign type="flag" props={{ color: 'yellow', folded: true }} />
          <HandHeldSign type="light" props={{ lightColor: 'white' }} />
        </SignWrapper>
      );

    case 3:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <HandHeldSign type="flag" props={{ color: 'yellow' }} />
          <HandHeldSign type="light" props={{ lightColor: 'yellow' }} />
        </SignWrapper>
      );

    case 4:
      return (
        <SignWrapper
          className={css.stopSignWrapper}
          containerWidth="mediumWide"
        >
          <SignWrapper containerWidth="mediumNarrow">
            <HandHeldSign type="flag" props={{ color: 'red' }} />
            <HandHeldSign type="light" props={{ lightColor: 'red' }} />
          </SignWrapper>
          <SignWrapper
            containerWidth="mediumNarrow"
            className={css.stopSignWrapper_spareOptions}
            animatedWrapperProps={{
              withAnimatedSigns: isHovered,
              additionalMargin: 'large'
            }}
          >
            <SignWrapper containerWidth="mediumNarrow">
              <HandHeldSign
                type="flag"
                props={{
                  color: 'yellow',
                  animate: isHovered,
                  animatedSignPath: 'stop'
                }}
              />
              <HandHeldSign
                type="light"
                props={{
                  lightColor: 'white',
                  animate: isHovered,
                  animatedSignPath: 'stop'
                }}
              />
            </SignWrapper>
            <SignWrapper>
              <Hand animate={isHovered} animatedSignPath="stop" />
            </SignWrapper>
          </SignWrapper>
        </SignWrapper>
      );

    case 5:
      return (
        <SignWrapper
          containerWidth="mediumNarrow"
          animatedWrapperProps={{
            withAnimatedSigns: isHovered,
            additionalMargin: 'largeNoMargin'
          }}
        >
          <HandHeldSign
            type="flag"
            props={{
              color: 'yellow',
              animate: isHovered,
              animatedSignPath: 'driveForward'
            }}
          />
          <HandHeldSign
            type="light"
            props={{
              lightColor: 'white',
              animate: isHovered,
              animatedSignPath: 'driveForward'
            }}
          />
        </SignWrapper>
      );

    case 6:
      return (
        <SignWrapper
          containerWidth="mediumNarrow"
          animatedWrapperProps={{
            withAnimatedSigns: isHovered,
            additionalMargin: 'noMarginLarge'
          }}
        >
          <HandHeldSign
            type="flag"
            props={{
              color: 'yellow',
              animate: isHovered,
              animatedSignPath: 'driveBackward'
            }}
          />
          <HandHeldSign
            type="light"
            props={{
              lightColor: 'white',
              animate: isHovered,
              animatedSignPath: 'driveBackward'
            }}
          />
        </SignWrapper>
      );

    case 7:
      return (
        <SignWrapper
          containerWidth="mediumNarrow"
          className={css.slowDownWrapper}
          animatedWrapperProps={{
            withAnimatedSigns: isHovered,
            additionalMargin: 'large'
          }}
        >
          <SignWrapper containerWidth="mediumNarrow">
            <HandHeldSign
              type="flag"
              props={{
                color: 'yellow',
                animate: isHovered,
                animatedSignPath: 'slowDown'
              }}
            />
            <HandHeldSign
              type="light"
              props={{
                lightColor: 'white',
                animate: isHovered,
                animatedSignPath: 'slowDown'
              }}
            />
          </SignWrapper>
          <Hand animate={isHovered} animatedSignPath="slowDown" />
        </SignWrapper>
      );

    case 8:
      return (
        <SignWrapper
          containerWidth="mediumNarrow"
          animatedWrapperProps={{
            withAnimatedSigns: isHovered,
            additionalMargin: 'mediumLarge'
          }}
        >
          <HandHeldSign
            type="light"
            props={{
              lightColor: 'white',
              animate: isHovered,
              animatedSignPath: 'startBreaking'
            }}
          />
          <Hand animate={isHovered} animatedSignPath="startBreaking" />
        </SignWrapper>
      );

    case 9:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <HandHeldSign
            type="light"
            props={{
              lightColor: 'white',
              animate: isHovered,
              animatedSignPath: 'stopBreaking'
            }}
          />
          <Hand animate={isHovered} animatedSignPath="stopBreaking" />
        </SignWrapper>
      );

    case 10:
      return (
        <SignWrapper className={css.damagedCatenaryWrapper}>
          <SignWrapper
            containerWidth="mediumNarrow"
            className={css.damagedCatenaryWrapper_hands}
          >
            <Hand animate={isHovered} animatedSignPath="stopBreaking" />
            <Hand left />
          </SignWrapper>
          <SignWrapper
            animatedWrapperProps={{
              withAnimatedSigns: isHovered,
              additionalMargin: 'extraLargeMedium'
            }}
          >
            <HandHeldSign
              type="light"
              props={{
                lightColor: 'white',
                animate: isHovered,
                animatedSignPath: 'damagedCatenary'
              }}
            />
          </SignWrapper>
        </SignWrapper>
      );

    case 11:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <RailSwitchSign mode="straightDay" />
          <RailSwitchSign mode="straightNight" />
          <RailSwitchSign mode="straightAnalog" />
        </SignWrapper>
      );

    case 12:
      return (
        <SignWrapper
          containerWidth="mediumWide"
          className={css.railSwitchDivertWrapper}
        >
          <SignWrapper containerWidth="mediumNarrow">
            <RailSwitchSign lightColor="turnedOff" mode="divert" />
            <RailSwitchSign lightColor="yellow" mode="divert" />
          </SignWrapper>
          <RailSwitchSign mode="divertAnalog" />
        </SignWrapper>
      );

    case 13:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <SignWrapper containerWidth="narrow">
            <RailSwitchSign mode="straightDay" />
            <RailSwitchSign mode="straightDay" atDistance />
          </SignWrapper>
          <SignWrapper containerWidth="narrow">
            <RailSwitchSign mode="straightNight" />
            <RailSwitchSign mode="straightNight" atDistance />
          </SignWrapper>
        </SignWrapper>
      );

    case 14:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <SignWrapper containerWidth="narrow">
            <RailSwitchSign lightColor="turnedOff" mode="divert" />
            <RailSwitchSign lightColor="turnedOff" mode="divert" atDistance />
          </SignWrapper>
          <SignWrapper containerWidth="narrow">
            <RailSwitchSign lightColor="yellow" mode="divert" />
            <RailSwitchSign lightColor="yellow" mode="divert" atDistance />
          </SignWrapper>
        </SignWrapper>
      );

    case 15:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <SignWrapper containerWidth="narrow">
            <RailSwitchSign lightColor="turnedOff" mode="divert" />
            <RailSwitchSign mode="straightDay" atDistance />
          </SignWrapper>
          <SignWrapper containerWidth="narrow">
            <RailSwitchSign lightColor="yellow" mode="divert" />
            <RailSwitchSign mode="straightNight" atDistance />
          </SignWrapper>
        </SignWrapper>
      );

    case 16:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <SignWrapper containerWidth="narrow">
            <RailSwitchSign mode="straightDay" />
            <RailSwitchSign lightColor="turnedOff" mode="divert" atDistance />
          </SignWrapper>
          <SignWrapper containerWidth="narrow">
            <RailSwitchSign mode="straightNight" />
            <RailSwitchSign lightColor="yellow" mode="divert" atDistance />
          </SignWrapper>
        </SignWrapper>
      );

    case 17:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <TrackObstruction />
          <TrackObstruction closed />
        </SignWrapper>
      );

    case 18:
      return (
        <SignWrapper
          containerWidth="mediumNarrow"
          className={css.waterTowerWrapper}
        >
          <RailSwitchSign lightColor="turnedOff" mode="divert" />
          <SignWrapper
            containerWidth="narrow"
            className={css.waterTowerWrapper_turnedOnSigns}
          >
            <RailSwitchSign lightColor="red" mode="divert" />
            <RailSwitchSign lightColor="white" mode="divert" />
          </SignWrapper>
        </SignWrapper>
      );

    case 19:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <SlowDown mainColor="yellow" />
          <SlowDown mainColor="green" />
        </SignWrapper>
      );

    case 20:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <SlowDown temporary mainColor="yellow" />
          <SlowDown temporary mainColor="green" />
        </SignWrapper>
      );

    case 21:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <DangerousPlaceBoundaries temporary />
          <DangerousPlaceBoundaries />
          <DangerousPlaceBoundaries temporary ending />
          <DangerousPlaceBoundaries ending />
        </SignWrapper>
      );

    case 22:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <Stop />
          <Stop nightTime />
        </SignWrapper>
      );

    case 23:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <CISSnowPlowSign snowPlowSignType="drop" />
          <CISSnowPlowSign snowPlowSignType="approach" />
          <CISSnowPlowSign snowPlowSignType="approachAtHighSpeed" />
          <CISSnowPlowSign snowPlowSignType="raise" />
        </SignWrapper>
      );

    case 24:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <CISHorn pole="temporary" />
          <CISHorn pole="permanent" />
          <CISHorn type="onCatenaryPole" />
        </SignWrapper>
      );

    case 25:
      return (
        <SignWrapper>
          <BlockBorder type="altp" />
        </SignWrapper>
      );

    case 26:
      return (
        <SignWrapper>
          <BlockBorder type="wwltp" />
        </SignWrapper>
      );

    case 27:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <CISHotAxles />
          <CISHotAxles turnedOn />
        </SignWrapper>
      );

    case 28:
      return (
        <SignWrapper className={css.dropPantographWrapper}>
          <SignWrapper containerWidth="mediumNarrow">
            <TogglePantograph />
            <TogglePantograph turnedOn />
          </SignWrapper>
          <SignWrapper
            containerWidth="mediumNarrow"
            className={css.dropPantographWrapper_temporarySigns}
          >
            <TogglePantograph type="standalone" />
            <TogglePantograph type="standalone" turnedOn />
          </SignWrapper>
        </SignWrapper>
      );

    case 29:
      return (
        <SignWrapper
          containerWidth="mediumNarrow"
          className={css.approachNeutralZoneWrapper}
        >
          <CISNeutralZone neutralZoneSignType="approach" />
          <CISNeutralZone neutralZoneSignType="approach" type="standalone" />
        </SignWrapper>
      );

    case 30:
      return (
        <SignWrapper className={css.raisePantographWrapper}>
          <SignWrapper
            containerWidth="mediumNarrow"
            className={css.raisePantographWrapper_group}
          >
            <TogglePantograph raise />
            <TogglePantograph type="standalone" raise />
          </SignWrapper>
          <SignWrapper
            containerWidth="mediumNarrow"
            className={css.raisePantographWrapper_group}
          >
            <TogglePantograph raise doubled />
            <TogglePantograph type="standalone" raise doubled />
          </SignWrapper>
        </SignWrapper>
      );

    case 31:
      return (
        <SignWrapper>
          <ToggleCurrent />
        </SignWrapper>
      );

    case 32:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <ToggleCurrent turnOn />
          <ToggleCurrent turnOn doubled />
        </SignWrapper>
      );

    case 33:
      return (
        <SignWrapper containerWidth="narrow">
          <CISNeutralZone neutralZoneSignType="boundaries" ending />
          <CISNeutralZone neutralZoneSignType="boundaries" />
        </SignWrapper>
      );

    case 34:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <CISBoundaryPole />
          <CISBoundaryPole branchPole />
        </SignWrapper>
      );

    case 35:
      return (
        <SignWrapper
          containerWidth="mediumNarrow"
          className={css.oilGasKarstWrapper}
        >
          <SignWrapper containerWidth="mediumNarrow">
            <TextSign exclamation line="diagonal" text="Газ" />
            <TextSign exclamation line="diagonal" text="Нафта" />
          </SignWrapper>
          <SignWrapper containerWidth="mediumNarrow">
            <TextSign line="horizontal" text="Карст" />
            <TextSign line="vertical" text="Карст" />
          </SignWrapper>
        </SignWrapper>
      );

    case 36:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <TextSign text="ПГ" red />
          <TextSign text="КГ" />
        </SignWrapper>
      );

    case 37:
      return (
        <SignWrapper className={css.stationBoundaryWrapper}>
          <TextSign
            type="standalone"
            pole="permanent"
            textSignType="rectangular"
            text="МЕЖА СТАНЦІЇ"
          />
          <TextSign
            type="standalone"
            pole="permanent"
            textSignType="rectangular"
            text="МЕЖА ПІД'ЇЗНОЇ КОЛІЇ"
          />
        </SignWrapper>
      );

    case 38:
      return (
        <SignWrapper className={css.stopPointWrapper}>
          <TextSign
            type="standalone"
            pole="permanent"
            textSignType="rectangular"
            text="ЗУПИНКА ЛОКОМОТИВА"
          />
          <TextSign
            type="standalone"
            pole="permanent"
            textSignType="rectangular"
            text="ЗУПИНКА ПЕРШОГО ВАГОНА"
          />
        </SignWrapper>
      );

    case 39:
      return (
        <SignWrapper className={css.catenarySignWrapper}>
          <TextSign
            type="onCatenaryWire"
            textSignType="rectangular"
            text="ПЕРЕХІД НА БОКОВУ КОНТАКТНУ МЕРЕЖУ"
          />
          <TextSign
            type="onCatenaryWire"
            textSignType="rectangular"
            text="ПЕРЕХІД НА ЦЕНТРАЛЬНУ КОНТАКТНУ МЕРЕЖУ"
          />
          <TextSign
            type="onCatenaryWire"
            textSignType="rectangular"
            text="КІНЕЦЬ КОНТАКТНОЇ ПІДВІСКИ"
          />
        </SignWrapper>
      );

    case 40:
      return (
        <SignWrapper containerWidth="mediumNarrow">
          <BioHazardSign pointOfView="front" />
          <BioHazardSign pointOfView="sideways" />
          <BioHazardSign pointOfView="fromBehind" />
        </SignWrapper>
      );

    default:
      throw new Error('Signs cannot be rendered without specified id');
  }
};
