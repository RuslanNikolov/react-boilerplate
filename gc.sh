mkdir -p src/$2/$1
sed -e "s/COMPONENT_NAME/$1/g" templates/Component.tsx > src/$2/$1/$1.tsx
sed -e "s/COMPONENT_NAME/$1/g" templates/Component.test.tsx > src/$2/$1/$1.test.tsx
sed -e "s/COMPONENT_NAME/$1/g" templates/Component.context.ts > src/$2/$1/$1.context.ts
sed -e "s/COMPONENT_NAME/$1/g" templates/Component.styled.js > src/$2/$1/$1.styled.js
