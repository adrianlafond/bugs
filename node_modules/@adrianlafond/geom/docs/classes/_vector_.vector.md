[@adrianlafond/geom](../README.md) > ["vector"](../modules/_vector_.md) > [Vector](../classes/_vector_.vector.md)

# Class: Vector

## Hierarchy

**Vector**

## Index

### Constructors

* [constructor](_vector_.vector.md#constructor)

### Properties

* [model](_vector_.vector.md#model)

### Accessors

* [data](_vector_.vector.md#data)
* [point](_vector_.vector.md#point)
* [radians](_vector_.vector.md#radians)
* [x](_vector_.vector.md#x)
* [y](_vector_.vector.md#y)

### Methods

* [clone](_vector_.vector.md#clone)
* [toString](_vector_.vector.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Vector**(x_point?: *`number` \| [Point](_point_.point.md)*, y_point?: *`number`*, radians?: *`number`*): [Vector](_vector_.vector.md)

*Defined in [vector.ts:15](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L15)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` x_point | `number` \| [Point](_point_.point.md) | 0 |
| `Default value` y_point | `number` | 0 |
| `Default value` radians | `number` | 0 |

**Returns:** [Vector](_vector_.vector.md)

___

## Properties

<a id="model"></a>

### `<Private>` model

**● model**: *[VectorModel](../interfaces/_vector_.vectormodel.md)*

*Defined in [vector.ts:15](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L15)*

___

## Accessors

<a id="data"></a>

###  data

**get data**(): [VectorData](../interfaces/_vector_.vectordata.md)

*Defined in [vector.ts:55](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L55)*

**Returns:** [VectorData](../interfaces/_vector_.vectordata.md)

___
<a id="point"></a>

###  point

**get point**(): [Point](_point_.point.md)

*Defined in [vector.ts:27](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L27)*

**Returns:** [Point](_point_.point.md)

___
<a id="radians"></a>

###  radians

**get radians**(): `number`

**set radians**(value: *`number`*): `void`

*Defined in [vector.ts:47](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L47)*

**Returns:** `number`

*Defined in [vector.ts:51](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___
<a id="x"></a>

###  x

**get x**(): `number`

**set x**(value: *`number`*): `void`

*Defined in [vector.ts:31](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L31)*

**Returns:** `number`

*Defined in [vector.ts:35](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___
<a id="y"></a>

###  y

**get y**(): `number`

**set y**(value: *`number`*): `void`

*Defined in [vector.ts:39](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L39)*

**Returns:** `number`

*Defined in [vector.ts:43](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): [Vector](_vector_.vector.md)

*Defined in [vector.ts:60](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L60)*

**Returns:** [Vector](_vector_.vector.md)

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [vector.ts:64](https://github.com/adrianlafond/geom/blob/3526ca8/src/vector.ts#L64)*

**Returns:** `string`

___

