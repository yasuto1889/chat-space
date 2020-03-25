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
|name|string|null: false|
|password|integer,string|unique: true,null: false|
### Association
- has_many :groups
- has_many :messages
- has_many :groups_users　through


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null :fales|
|name|string|null: false|
|member|string|null: fales|
### Association
- has_many :users
- has_many :messages
- has_many :groups_users　through


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null :fales|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

