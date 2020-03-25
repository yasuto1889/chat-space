# chat-space
 ## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|E-mail|string|unique: true,null: false|
|password|integer,string|unique: true,null: false|
|Group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :Group

## Group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null :fales|
|name|string|null: false|
|member|string|null: fales|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null :fales|
|body|text|null :fales|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user

