'use client';
import ActionButtonSet from '@/components/ActionButtonSet';

function Tag({ content }: { id: string; content: number }) {
  function showDialog() {
    alert('Hey');
  }

  function cond1() {}

  return (
    <span onClick={showDialog}>
      {content === 1 && <b style={{ color: 'green' }}>Active</b>}
      {content === 2 && <b style={{ color: 'red' }}>Inactive</b>}
      {content === 3 && <b style={{ color: 'gray' }}>Ready</b>}
    </span>
  );
}

export default function Page() {
  const data = [
    {
      id: '1',
      status: true,
      tag: 1,
    },
    {
      id: '2',
      status: false,
      tag: 2,
    },
    {
      id: '3',
      status: true,
      tag: 3,
    },
  ];

  const customDeleteButton = <button>Delete</button>;

  return (
    <div>
      <h2>List</h2>

      <hr />

      <div>
        <ActionButtonSet id="1" enableDeleteBtn />
      </div>
      <div>
        <ActionButtonSet id="2" enableDeleteBtn enableEditBtn />
      </div>
      <div>
        <ActionButtonSet id="2" enableDeleteBtn enableEditBtn>
          {{
            deleteBtn: customDeleteButton,
            rightSection: <b style={{ color: 'red' }}>Tag 1</b>,
          }}
        </ActionButtonSet>
      </div>

      <h1>Composite</h1>

      {data.map((item) => (
        <div key={item.id}>
          <ActionButtonSet
            id="2"
            enableDeleteBtn={!item.status}
            enableEditBtn={!item.status}
          >
            {{
              rightSection: <Tag id={item.id} content={item.tag} />,
            }}
          </ActionButtonSet>
        </div>
      ))}
    </div>
  );
}
