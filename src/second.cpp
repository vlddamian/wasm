#include <emscripten/emscripten.h>
#include <memory>

using namespace std;

class Second {
public:
    virtual int hello(){
        return 1;
    }

};

class Derived : public Second {
public:
    int hello(){
        return 4;
    }

};

extern "C" EMSCRIPTEN_KEEPALIVE int useCpp(){

    unique_ptr<Second> sec( new Derived );
    int res = sec->hello();

    return res;
}
