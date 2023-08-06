[@adrianlafond/geom](../README.md) > ["point"](../modules/_point_.md) > [Point](../classes/_point_.point.md)

# Class: Point

## Hierarchy

**Point**

## Index

### Constructors

* [constructor](_point_.point.md#constructor)

### Properties

* [x](_point_.point.md#x)
* [y](_point_.point.md#y)

### Accessors

* [data](_point_.point.md#data)

### Methods

* [add](_point_.point.md#add)
* [clone](_point_.point.md#clone)
* [subtract](_point_.point.md#subtract)
* [toString](_point_.point.md#tostring)
* [distance](_point_.point.md#distance)
* [radians](_point_.point.md#radians)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Point**(x?: *`number`*, y?: *`number`*): [Point](_point_.point.md)

*Defined in [point.ts:9](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L9)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` x | `number` | 0 |
| `Default value` y | `number` | 0 |

**Returns:** [Point](_point_.point.md)

___

## Properties

<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [point.ts:10](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L10)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [point.ts:10](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L10)*

___

## Accessors

<a id="data"></a>

###  data

**get data**(): [PointData](../interfaces/_point_.pointdata.md)

*Defined in [point.ts:12](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L12)*

**Returns:** [PointData](../interfaces/_point_.pointdata.md)

___

## Methods

<a id="add"></a>

###  add

▸ **add**(point: *[Point](_point_.point.md)*): [Point](_point_.point.md)

*Defined in [point.ts:20](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| point | [Point](_point_.point.md) |

**Returns:** [Point](_point_.point.md)

___
<a id="clone"></a>

###  clone

▸ **clone**(): [Point](_point_.point.md)

*Defined in [point.ts:16](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L16)*

**Returns:** [Point](_point_.point.md)

___
<a id="subtract"></a>

###  subtract

▸ **subtract**(point: *[Point](_point_.point.md)*): [Point](_point_.point.md)

*Defined in [point.ts:26](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| point | [Point](_point_.point.md) |

**Returns:** [Point](_point_.point.md)

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [point.ts:32](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L32)*

**Returns:** `string`

___
<a id="distance"></a>

### `<Static>` distance

▸ **distance**(p1: *[Point](_point_.point.md)*, p2: *[Point](_point_.point.md)*): `number`

*Defined in [point.ts:36](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| p1 | [Point](_point_.point.md) |
| p2 | [Point](_point_.point.md) |

**Returns:** `number`

___
<a id="radians"></a>

### `<Static>` radians

▸ **radians**(p1: *[Point](_point_.point.md)*, p2: *[Point](_point_.point.md)*): `number`

*Defined in [point.ts:40](https://github.com/adrianlafond/geom/blob/3526ca8/src/point.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| p1 | [Point](_point_.point.md) |
| p2 | [Point](_point_.point.md) |

**Returns:** `number`

___

