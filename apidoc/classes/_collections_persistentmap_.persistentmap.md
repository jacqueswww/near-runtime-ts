[near-runtime-ts](../README.md) > ["collections/persistentMap"](../modules/_collections_persistentmap_.md) > [PersistentMap](../classes/_collections_persistentmap_.persistentmap.md)

# Class: PersistentMap

A map class that implements a persistent unordered map. NOTE: The Map doesn't store keys, so if you need to retrive them, include keys in the values.

## Type parameters
#### K 
#### V 
## Hierarchy

**PersistentMap**

## Index

### Constructors

* [constructor](_collections_persistentmap_.persistentmap.md#constructor)

### Methods

* [contains](_collections_persistentmap_.persistentmap.md#contains)
* [delete](_collections_persistentmap_.persistentmap.md#delete)
* [get](_collections_persistentmap_.persistentmap.md#get)
* [getSome](_collections_persistentmap_.persistentmap.md#getsome)
* [set](_collections_persistentmap_.persistentmap.md#set)
* [values](_collections_persistentmap_.persistentmap.md#values)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PersistentMap**(prefix: *`string`*): [PersistentMap](_collections_persistentmap_.persistentmap.md)

*Defined in [collections/persistentMap.ts:9](https://github.com/nearprotocol/near-runtime-ts/blob/d0fcf87/assembly/collections/persistentMap.ts#L9)*

Creates or restores a persistent map with a given storage prefix. Always use a unique storage prefix for different collections.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| prefix | `string` |  A prefix to use for every key of this map. |

**Returns:** [PersistentMap](_collections_persistentmap_.persistentmap.md)

___

## Methods

<a id="contains"></a>

###  contains

▸ **contains**(key: *`K`*): `bool`

*Defined in [collections/persistentMap.ts:48](https://github.com/nearprotocol/near-runtime-ts/blob/d0fcf87/assembly/collections/persistentMap.ts#L48)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `K` |  Key to check. |

**Returns:** `bool`
True if the given key present in the map.

___
<a id="delete"></a>

###  delete

▸ **delete**(key: *`K`*): `void`

*Defined in [collections/persistentMap.ts:56](https://github.com/nearprotocol/near-runtime-ts/blob/d0fcf87/assembly/collections/persistentMap.ts#L56)*

Removes value and the key from the map.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `K` |  Key to remove. |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(key: *`K`*, defaultValue?: *`V` \| `null`*): `V` \| `null`

*Defined in [collections/persistentMap.ts:65](https://github.com/nearprotocol/near-runtime-ts/blob/d0fcf87/assembly/collections/persistentMap.ts#L65)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| key | `K` | - |  Key of the element. |
| `Default value` defaultValue | `V` \| `null` |  null |  The default value if the key is not present. |

**Returns:** `V` \| `null`
Value for the given key or the default value.

___
<a id="getsome"></a>

###  getSome

▸ **getSome**(key: *`K`*): `V`

*Defined in [collections/persistentMap.ts:73](https://github.com/nearprotocol/near-runtime-ts/blob/d0fcf87/assembly/collections/persistentMap.ts#L73)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `K` |  Key of the element. |

**Returns:** `V`
Value for the given key or the default value.

___
<a id="set"></a>

###  set

▸ **set**(key: *`K`*, value: *`V`*): `void`

*Defined in [collections/persistentMap.ts:82](https://github.com/nearprotocol/near-runtime-ts/blob/d0fcf87/assembly/collections/persistentMap.ts#L82)*

Sets the new value for the given key.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `K` |  Key of the element. |
| value | `V` |  The new value of the element. |

**Returns:** `void`

___
<a id="values"></a>

###  values

▸ **values**(start: *`K`*, end: *`K`*, limit?: *`i32`*, startInclusive?: *`bool`*): `V`[]

*Defined in [collections/persistentMap.ts:36](https://github.com/nearprotocol/near-runtime-ts/blob/d0fcf87/assembly/collections/persistentMap.ts#L36)*

Returns values of the map between the given start key and the end key.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| start | `K` | - |  Starting from which key to include values. Default is \`null\`, means from the beginning. |
| end | `K` | - |  Up to which key include values (inclusive). Default is \`null\`, means to the end. |
| `Default value` limit | `i32` |  -1 |  The maximum number of values to return. Default is \`-1\`, means no limit. |
| `Default value` startInclusive | `bool` | true |  Whether the start key is inclusive. Default is \`true\`, means include start key. It's useful to set it to false for pagination. |

**Returns:** `V`[]

___

